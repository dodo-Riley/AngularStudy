import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding',
  template: `
    <input type="text" [(ngModel)]="name">
    <p>name: {{ name }}</p>
  `
})
export class TwowaydatabindingComponent {
  name = '';
}
