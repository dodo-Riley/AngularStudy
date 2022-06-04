import { Component } from '@angular/core';
@Component({
  selector: 'app-interpolation',
  template: `
    <p>name: {{ name }}</p>
    <p>age: {{ age }}</p>
    <p>admin: {{ admin }}</p>
    <p>address: {{ address.city }} {{ address.country }}</p>
    <p>gender: {{ gender }}</p>
    <p>sayHi(): {{ sayHi() }}</p>
    <p>age * 10: {{ age * 10 }}</p>
    <p>age > 10: {{ age > 10 }}</p>
    <p>'stirng': {{ 'stirng' }}</p>
  `
})
export class InterpolationComponent {
  name = 'Angular';
  age = 20;
  admin = true;
  address = {
    city: 'Seoul',
    country: 'Korea'
  };
  gender = 'Male'

  sayHi() {
    return `Hi! my name is ${ this.name }.`;
  }
}
