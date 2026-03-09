import {
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  AfterViewChecked,
} from '@angular/core';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  streaming?: boolean;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnDestroy, AfterViewChecked {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('inputEl') inputEl!: ElementRef<HTMLTextAreaElement>;

  isOpen = false;
  isLoading = false;
  inputText = '';
  messages: Message[] = [
    {
      role: 'assistant',
      content: "Hi! I'm Madhukar's AI assistant. Ask me anything about his skills, experience, or projects!",
    },
  ];

  private abortController: AbortController | null = null;
  private shouldScrollToBottom = false;

  private readonly API_URL = 'https://parupati-iran-us-aviation-rag.hf.space/portfolio-chat';

  toggleChat(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.shouldScrollToBottom = true;
      setTimeout(() => this.inputEl?.nativeElement.focus(), 100);
    }
  }

  closeChat(): void {
    this.isOpen = false;
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  async sendMessage(): Promise<void> {
    const text = this.inputText.trim();
    if (!text || this.isLoading) return;

    this.inputText = '';
    this.isLoading = true;

    // Add user message
    this.messages.push({ role: 'user', content: text });

    // Add placeholder assistant message
    const assistantMsg: Message = { role: 'assistant', content: '', streaming: true };
    this.messages.push(assistantMsg);
    this.shouldScrollToBottom = true;

    // Build conversation history (exclude the empty streaming placeholder)
    const history = this.messages
      .slice(0, -1)
      .filter(m => m.content)
      .map(m => ({ role: m.role, content: m.content }));

    this.abortController = new AbortController();

    try {
      const response = await fetch(this.API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
        signal: this.abortController.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      assistantMsg.content = data.reply;
      this.shouldScrollToBottom = true;
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') {
        assistantMsg.content += ' [stopped]';
      } else {
        assistantMsg.content = "Sorry, I couldn't connect right now. Please try again or reach out on LinkedIn!";
      }
    } finally {
      assistantMsg.streaming = false;
      this.isLoading = false;
      this.abortController = null;
      this.shouldScrollToBottom = true;
    }
  }

  stopGeneration(): void {
    this.abortController?.abort();
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
    } catch {
      // ignore
    }
  }

  ngOnDestroy(): void {
    this.abortController?.abort();
  }
}
