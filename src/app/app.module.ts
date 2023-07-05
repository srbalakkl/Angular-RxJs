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
import { DistinctUntilChangedOperatorComponent } from './distinct-until-changed-operator/distinct-until-changed-operator.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { SubjectComponent } from './subject/subject.component';
import { ZipOperatorComponent } from './zip-operator/zip-operator.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { SwitchAndMergeMapComponent } from './switch-and-merge-map/switch-and-merge-map.component';
import { StartWithComponent } from './start-with/start-with.component';
import { ConcatAndExhaustMapComponent } from './concat-and-exhaust-map/concat-and-exhaust-map.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SchedulerWithAnimeAndIntervalComponent } from './scheduler-with-anime-and-interval/scheduler-with-anime-and-interval.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsTutorComponent,
    MapAndMaptoOperatorComponent,
    FromEventOperatorComponent,
    IntervalComponent,
    DebounceTimeComponent,
    TapOperatorComponent,
    DistinctUntilChangedOperatorComponent,
    CombineLatestComponent,
    SwitchMapComponent,
    SubjectComponent,
    ZipOperatorComponent,
    BehaviourSubjectComponent,
    SwitchAndMergeMapComponent,
    BehaviourSubjectComponent,
    StartWithComponent,
    ConcatAndExhaustMapComponent,
    SchedulerComponent,
    SchedulerWithAnimeAndIntervalComponent
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
