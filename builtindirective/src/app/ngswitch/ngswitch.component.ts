import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  template: `
    <input type="text" [(ngModel)]="num" placeholder="숫자를 입력하세요">
    <div [ngSwitch]="num">
      <div *ngSwitchCase="'1'">One</div>
      <div *ngSwitchCase="'2'">Two</div>
      <div *ngSwitchCase="'3'">Three</div>
      <div *ngSwitchDefault>This is Default</div>
    </div>
  `
})
export class NgswitchComponent {
  num!: string;
}
