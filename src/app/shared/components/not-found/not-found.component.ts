


import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements AfterViewInit{
  @ViewChild('text', { static: true }) textRef!: ElementRef<HTMLParagraphElement>;
  @ViewChild('cursor', { static: true }) cursorRef!: ElementRef<HTMLSpanElement>;

  private chars: HTMLElement[] = [];
  private animationFrame?: number;

  ngAfterViewInit() {
    this.prepareText();
    this.startAnimation();
    this.startBlink();
  }

  private prepareText() {
    const el = this.textRef.nativeElement;
    const text = el.innerText;
    el.innerHTML = '';

    this.chars = [...text].map(letter => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.className = 'char';
      span.style.opacity = '0';
      el.appendChild(span);
      return span;
    });
  }

  private startAnimation() {
    let i = 0;

    const step = () => {
      if (i >= this.chars.length) return;

      const char = this.chars[i];
      char.style.opacity = '1';

      this.moveCursorTo(char);

      i++;
      this.animationFrame = window.setTimeout(step, 45);
    };

    step();
  }

  private moveCursorTo(char: HTMLElement) {
    const cursor = this.cursorRef.nativeElement;
    const rect = char.getBoundingClientRect();
    const parentRect = this.textRef.nativeElement.getBoundingClientRect();

    const x = rect.right - parentRect.left;
    cursor.style.transform = `translateX(${x}px)`;
  }

  private startBlink() {
    const cursor = this.cursorRef.nativeElement;

    setInterval(() => {
      cursor.classList.toggle('hidden');
    }, 450);
  }

  replay() {
    clearTimeout(this.animationFrame);

    this.chars.forEach(c => c.style.opacity = '0');
    this.cursorRef.nativeElement.style.transform = `translateX(0px)`;

    this.startAnimation();
  }
}
