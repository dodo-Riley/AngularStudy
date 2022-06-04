import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `
    <!-- (1) -->
    <input type="text" [value]="name" (input)="setName($event)">
    <!-- (2) -->
    <button (click)="clearName()">clear</button>
    <!-- (3) -->
    <p>name: {{ name }}</p>
  `
})
export class EventbindingComponent {
  name = '';

  setName(event:any) {
    console.log(event);
    // event.target.value에는 사용자 입력 텍스트가 담겨있다.
    this.name = event.target.value;
  }

  clearName() {
    this.name = '';
  }
}
