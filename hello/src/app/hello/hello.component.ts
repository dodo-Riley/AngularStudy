import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  name!: string;
  arr!: Array<any>;

  setName(name: string) {
    this.name = name;
  }

  setArray(array:Array<any>) {
    this.arr = array;
  }
}
