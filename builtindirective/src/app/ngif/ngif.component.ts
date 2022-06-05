import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  template: `
    <!-- ngIf에 의한 show/hide -->
    <p *ngIf="isShow">Lorem ipsum dolor sit amet</p>

    <!-- 스타일 바인딩에 의한 show/hide -->
    <p [style.display]="isShow ? 'block' : 'none'">Lorem ipsum dolor sit amet</p>

    <button (click)="isShow=!isShow">{{ isShow ? 'Hide' : 'Show' }}</button>

    <!--ngIf else-->
    <div>
      <input type="radio" id="one" name="skill" (click)="setSkill($event)" value="HTML">
      <label for="one"> HTML</label>
      <input type="radio" id="two" name="skill" (click)="setSkill($event)" value="CSS">
      <label for="two"> CSS</label>
    </div>

    <!-- 참인 경우, 별도의 ng-template를 사용하지 않는 방법  -->
    <div *ngIf="mySkill==='HTML'; else elseBlock">HTML</div>
    <ng-template #elseBlock><div>CSS</div></ng-template>

    <!-- 참인 경우, 별도의 ng-template를 사용하는 방법  -->
    <div *ngIf="mySkill==='HTML'; then thenBlock_1 else elseBlock_1"></div>
    <ng-template #thenBlock_1><div>HTML</div></ng-template>
    <ng-template #elseBlock_1><div>CSS</div></ng-template>
  `,
  styles: [`
    p { background-color: #CDDC39; }
  `]
})
export class NgifComponent {
  isShow = true;
  mySkill = 'HTML';
  setSkill(event:any) {
    this.mySkill = event.target.value;
  }
}
