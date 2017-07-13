import { Directive, Input, ViewContainerRef, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective {

  constructor() { }

  @Input() condition: boolean;

  @HostBinding('style.visibility') myBG;

  ngOnInit() {
    if (this.condition)
      this.myBG = 'visible';
    else
      this.myBG = 'hidden';
  }

}
