import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  template: `
    <ul>
      <!-- 문자열에 의한 클래스 지정  -->
      <li [ngClass]="stringCssClasses">bold blue</li>
      <!-- 배열에 의한 클래스 지정  -->
      <li [ngClass]="ArrayCssClasses">italic red</li>
      <!-- 객체에 의한 클래스 지정  -->
      <li [ngClass]="ObjectCssClasses">bold red</li>
      <!-- 컴포넌트 메소드에 의한 클래스 지정 -->
      <li [ngClass]="getCSSClasses('italic-blue')">italic blue</li>
    </ul>
  `,
  styles: [`
    .text-bold   { font-weight: bold; }
    .text-italic { font-style: italic; }
    .color-blue  { color: blue; }
    .color-red   { color: red; }
  `]
})
export class NgclassComponent {
  state = true;

  // 문자열 클래스 목록
  stringCssClasses = 'text-bold color-blue';
  // 배열 클래스 목록
  ArrayCssClasses = ['text-italic', 'color-red'];
  // 객체 클래스 목록
  ObjectCssClasses = {
    'text-bold': this.state,
    'text-italic': !this.state,
    'color-blue': !this.state,
    'color-red': this.state
  };

  // 클래스 목록을 반환하는 컴포넌트 메소드
  getCSSClasses(flag: string) {
    let classes;
    if (flag === 'italic-blue') {
      classes = {
        'text-bold': !this.state,
        'text-italic': this.state,
        'color-red': !this.state,
        'color-blue': this.state
      };
    } else {
      classes = {
        'text-bold': this.state,
        'text-italic': !this.state,
        'color-red': this.state,
        'color-blue': !this.state
      };
    }
    return classes;
  }
}
