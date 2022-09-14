import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RxjsTutorComponent} from './rxjs-tutor/rxjs-tutor.component';
import {MapAndMaptoOperatorComponent} from './map-and-mapto-operator/map-and-mapto-operator.component';
import {FromEventOperatorComponent} from './form-event-operator/from-event-operator.component';
import {IntervalComponent} from './interval/interval.component';
import {DebounceTimeComponent} from './debounce-time/debounce-time.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TapOperatorComponent} from './tap-operator/tap-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsTutorComponent,
    MapAndMaptoOperatorComponent,
    FromEventOperatorComponent,
    IntervalComponent,
    DebounceTimeComponent,
    TapOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
