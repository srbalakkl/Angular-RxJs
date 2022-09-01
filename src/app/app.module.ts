import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsTutorComponent } from './rxjs-tutor/rxjs-tutor.component';
import { MapAndMaptoOperatorComponent } from './map-and-mapto-operator/map-and-mapto-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsTutorComponent,
    MapAndMaptoOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
