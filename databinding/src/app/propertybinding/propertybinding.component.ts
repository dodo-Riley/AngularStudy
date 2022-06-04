import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  template: `
    <!-- input 요소의 value 프로퍼티에 컴포넌트 클래스의 name 프로퍼티 값을 프로퍼티 바인딩 -->
    <input type="text" [value]="name">

    <!-- p 요소의 innerHTML 프로퍼티에 컴포넌트 클래스의 contents 프로퍼티 값을 프로퍼티 바인딩 -->
    <p [innerHTML]="contents"></p>

    <!-- img 요소의 src 프로퍼티에 컴포넌트 클래스의 imageUrl 프로퍼티 값을 프로퍼티 바인딩 -->
    <img [src]="imageUrl"><br>

    <!-- button 요소의 disabled 프로퍼티에 컴포넌트 클래스의 isDisabled 프로퍼티 값을 프로퍼티 바인딩 -->
    <button [disabled]="isDisabled">disabled button</button>
  `
})
export class PropertybindingComponent {
  name = 'ungmo2';
  contents = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  imageUrl = 'https://via.placeholder.com/350x150';
  isDisabled = true;
}
