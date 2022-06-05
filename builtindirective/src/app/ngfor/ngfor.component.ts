import { Component } from '@angular/core';

interface User {
  id: number;
  name: string
}

@Component({
  selector: 'app-ngfor',
  template: `
    <!-- user를 추가한다 -->
    <input type="text" placeholder="이름을 입력하세요" #name>
    <button (click)="addUser(name.value)">add user</button>
    <ul>
      <!-- users 배열의 length만큼 반복하며 li 요소와 하위 요소를 DOM에 추가한다 -->
      <li *ngFor="let user of users; let i=index; trackBy: trackByUserId">
        {{ i }}: {{ user.name }}
        <!-- 해당 user를 제거한다 -->
        <button (click)="removeUser(user.id)">X</button>
      </li>
    </ul>
    <pre>{{ users | json }}</pre>
  `
})
export class NgforComponent {
  users: User[] = [
    { id: 1, name: 'Lee' },
    { id: 2, name: 'Kim' },
    { id: 3, name: 'Baek' }
  ];

  // user를 추가한다
  addUser(name: string) {
    if (name) {
      this.users.push({ id: this.getNewUserId(), name });
    }
  }

  // 해당 user를 제거한다.
  removeUser(userid: number) {
    this.users = this.users.filter(({ id }) => id !== userid);
  }

  // 추가될 user의 id를 반환한다
  getNewUserId(): number {
    return this.users.length ? Math.max(...this.users.map(({ id }) => id)) + 1 : 1;
  }

  // 변경 트래킹 기준을 반환한다.
  trackByUserId(index: number, user: User) {
    // user.id를 기준으로 변경을 트래킹한다.
    return user.id; // or index
  }
}
