import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsTutorComponent } from './rxjs-tutor/rxjs-tutor.component';
import { MapAndMaptoOperatorComponent } from './map-and-mapto-operator/map-and-mapto-operator.component';
import { FromEventOperatorComponent } from './form-event-operator/from-event-operator.component';
import { IntervalComponent } from './interval/interval.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsTutorComponent,
    MapAndMaptoOperatorComponent,
    FromEventOperatorComponent,
    IntervalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
