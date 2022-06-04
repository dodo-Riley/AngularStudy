import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent} from './propertybinding/propertybinding.component';
import { AttributebindingComponent } from './attributebinding/attributebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertybindingComponent,
    AppComponent,
    AttributebindingComponent,
    ClassbindingComponent,
    ClassbindingComponent,
    StylebindingComponent,
    StylebindingComponent,
    EventbindingComponent,
    EventbindingComponent,
    TwowaydatabindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
