// app.component.ts
import { Component } from '@angular/core';
import { GreetingService } from './greeting.service';
import {AppConfig, MY_APP_CONFIG} from "./app.config";
import {IsDevProvider, UserServiceProvider} from "./user.service.provider";
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  template: `
    <button (click)="sayHi()">Say Hi</button>
    <p>{{ greeting }}</p>
    {{ appConfig | json }}
    {{ userService.getUser() | json }}
    <app-sibling1></app-sibling1>
    <app-sibling2></app-sibling2>
  `,
  providers: [
    GreetingService,
    { provide: AppConfig, useValue: MY_APP_CONFIG },
    IsDevProvider,
    UserServiceProvider
  ] /* @Component 프로바이더 */

})
export class AppComponent {
  greeting!: string;
  // greetingService: GreetingService;

  constructor(
    // 의존성 주입
    private greetingService: GreetingService,
    public appConfig: AppConfig,
    public userService: UserService
  ) {
    // 서비스의 인스턴스를 직접 생성한다.
    // this.greetingService = new GreetingService();
    console.log(appConfig)
    console.log(userService.getUser())
  }

  sayHi() {
    // 서비스의 사용
    this.greeting = this.greetingService.sayHi();
  }


}
