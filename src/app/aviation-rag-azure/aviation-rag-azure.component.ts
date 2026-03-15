import {
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  AfterViewChecked,
} from '@angular/core';

interface Source {
  title: string;
  content: string;
  source: string;
  source_type: string;
  published_date: string;
  url: string;
  score: number;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  sources?: Source[];
  loading?: boolean;
}

@Component({
  selector: 'app-aviation-rag-azure',
  templateUrl: './aviation-rag-azure.component.html',
  styleUrls: ['./aviation-rag-azure.component.css'],
})
export class AviationRagAzureComponent implements OnDestroy, AfterViewChecked {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('inputEl') inputEl!: ElementRef<HTMLTextAreaElement>;

  isLoading = false;
  inputText = '';
  messages: Message[] = [
    {
      role: 'assistant',
      content:
        'Welcome! I\'m powered by Azure AI Search + GPT-4o. Ask me about aviation disruptions from the 2026 Iran-US conflict — airline losses, airport closures, flight cancellations, reroutes, and more.',
    },
  ];

  examples: string[] = [
    'Which airline had the highest daily financial loss?',
    'What airports in Iran were closed?',
    'How many flights were cancelled from Dubai?',
    'What was the aviation impact of the Natanz airstrike?',
    'Which countries closed their airspace?',
  ];

  private readonly API_URL = 'https://aviation-rag-api.whitehill-79bfff18.eastus.azurecontainerapps.io/query';
  private shouldScrollToBottom = false;
  private abortController: AbortController | null = null;

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  askExample(question: string): void {
    this.inputText = question;
    this.sendMessage();
  }

  async sendMessage(): Promise<void> {
    const text = this.inputText.trim();
    if (!text || this.isLoading) return;

    this.inputText = '';
    this.isLoading = true;

    this.messages.push({ role: 'user', content: text });
    const assistantMsg: Message = { role: 'assistant', content: '', loading: true };
    this.messages.push(assistantMsg);
    this.shouldScrollToBottom = true;

    this.abortController = new AbortController();

    try {
      const response = await fetch(this.API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text, k: 5 }),
        signal: this.abortController.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      assistantMsg.content = data.answer;
      assistantMsg.sources = data.sources;
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') {
        assistantMsg.content = 'Request cancelled.';
      } else {
        assistantMsg.content =
          'Sorry, I couldn\'t connect to the Azure RAG service. It may be scaling up — please try again in a moment.';
      }
    } finally {
      assistantMsg.loading = false;
      this.isLoading = false;
      this.abortController = null;
      this.shouldScrollToBottom = true;
    }
  }

  stopGeneration(): void {
    this.abortController?.abort();
  }

  toggleSources(msg: Message): void {
    (msg as any)._showSources = !(msg as any)._showSources;
  }

  showSources(msg: Message): boolean {
    return !!(msg as any)._showSources;
  }

  ngAfterViewChecked(): void {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  private scrollToBottom(): void {
    try {
      const el = this.messagesContainer?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    } catch {}
  }

  ngOnDestroy(): void {
    this.abortController?.abort();
  }
}
