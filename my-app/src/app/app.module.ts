import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewComponentComponent } from './new-component/new-component.component';
import {TodosModule} from "./todos/todos.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
