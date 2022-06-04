import { Component } from '@angular/core';

@Component({
  selector: 'app-attributebinding',
  template: `
    <!-- 프로퍼티 바인딩 -->
    <input id="user" type="text" [value]="name" >
    <!-- 어트리뷰트 바인딩 -->
    <input id="user" type="text" [attr.value]="name">
    <h1>{{name}}</h1>

  `
})
export class AttributebindingComponent {
  name = 'ungmo2';
}
