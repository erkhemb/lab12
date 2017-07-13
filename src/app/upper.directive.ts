import { Directive, ElementRef, Renderer, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[upper]'
})
export class UpperDirective {

  constructor(private element: ElementRef,
    private renderer: Renderer,
    private viewController: ViewContainerRef) {

    renderer.setElementStyle(element.nativeElement, 'text-transform', 'uppercase');
  }

}
