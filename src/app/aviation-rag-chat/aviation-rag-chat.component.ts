import {
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  AfterViewChecked,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Source {
  category: string;
  content: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  sources?: Source[];
  loading?: boolean;
}

@Component({
  selector: 'app-aviation-rag-chat',
  templateUrl: './aviation-rag-chat.component.html',
  styleUrls: ['./aviation-rag-chat.component.css'],
})
export class AviationRagChatComponent implements OnDestroy, AfterViewChecked {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('inputEl') inputEl!: ElementRef<HTMLTextAreaElement>;

  isLoading = false;
  inputText = '';
  messages: Message[] = [
    {
      role: 'assistant',
      content:
        'Welcome! I can answer questions about the 2026 Iran-US conflict\'s impact on global civil aviation — airline losses, airport disruptions, airspace closures, flight cancellations, and reroutes. Ask me anything!',
    },
  ];

  examples: string[] = [
    'Which airline had the highest daily financial loss?',
    'What airports in Iran were closed?',
    'How many flights were cancelled from Dubai?',
    'What was the aviation impact of the Natanz airstrike?',
    'Which countries closed their airspace?',
  ];

  private readonly API_URL = 'https://parupati-iran-us-aviation-rag.hf.space/query';
  private shouldScrollToBottom = false;
  private abortController: AbortController | null = null;

  constructor(private http: HttpClient) {}

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
          'Sorry, I couldn\'t connect to the RAG service. The Hugging Face Space might be sleeping — please try again in a minute.';
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
