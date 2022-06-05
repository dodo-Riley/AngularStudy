import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  template: `
    <div>
      Width: <input type="text" [(ngModel)]="width">
      <button (click)="increaseWidth()">+</button>
      <button (click)="decreaseWidth()">-</button>
    </div>
    <div>
      Height: <input type="text" [(ngModel)]="height">
      <button (click)="increaseHeight()">+</button>
      <button (click)="decreaseHeight()">-</button>
    </div>
    <button (click)="isShow=!isShow">{{ isShow ? 'Hide' : 'Show' }}</button>
    <!-- 스타일 지정  -->
    <div
      [ngStyle]="{
        'width.px': width,
        'height.px': height,
        'background-color': bgColor,
        'visibility': isShow ? 'visible' : 'hidden'
      }">
    </div>
  `
})
export class NgstyleComponent {
  width = 200;
  height = 200;
  bgColor = '#4caf50';
  isShow = true;

  increaseWidth()  {
    this.width = this.width + 10;
  }

  decreaseWidth()  {
    this.width = this.width - 10;
  }

  increaseHeight() {
    this.height = this.height + 10;
  }

  decreaseHeight() {
    this.height = this.height - 10;
  }
}
