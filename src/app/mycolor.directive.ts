import { Directive, ElementRef, EventEmitter, Renderer, HostListener, HostBinding, Input, Output, OnInit } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {
  private color: string;
  private colors: string[] = ['red', 'yellow', 'blue', 'brown']

  @Output() currentColor = new EventEmitter();
  constructor(private e: ElementRef, private r: Renderer) {
    this.color = 'red';
    r.setElementStyle(e.nativeElement, 'color', this.color)
  }

  @HostListener('click') foo() {
    this.color = this.colors[Math.floor(Math.random() * 4)];
    this.e.nativeElement.style.color = this.color;
    this.currentColor.emit(this.color);
  }
  ngOnInit() {
    this.currentColor.emit(this.color);
  }
}
