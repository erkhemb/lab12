import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <ul>
      <li *ngFor="let name of names">{{name}}</li>
    </ul>

    <ul>
      <li upper *ngFor="let name of names">{{name}}</li>
    </ul> 

    <div myvisibility [condition]="true">Content is showed.</div>
    <div myvisibility [condition]="false">Content is hided.</div>
  
    <div mycolor (currentColor)="showOutputData($event)">Click me for new color</div>

  `,
  styles: []
})
export class CounterComponent implements OnInit {


  names: string[];

  constructor() {
    this.names = ['Asaad', 'Mike', 'Tina', 'Ebi'];
  }


  ngOnInit() {
  }

  public newColor: string;

  showOutputData(data): void {
    this.newColor = data;
  }

}
