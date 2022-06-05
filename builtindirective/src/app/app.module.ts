import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextblueComponent } from './textblue/textblue.component';
import { TextBlueDirective } from './textblue/textblue.directive';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { FormsModule } from "@angular/forms";
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    TextblueComponent,
    TextBlueDirective,
    TextblueComponent,
    NgclassComponent,
    NgstyleComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
