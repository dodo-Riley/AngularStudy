import { Injectable } from '@angular/core';

@Injectable(
//   {
//   providedIn: 'root' /* @Injectable 프로바이더 */
// }
)
export class GreetingService {
  sayHi() { return 'Hi!'; }
}
