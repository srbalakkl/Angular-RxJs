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
import { SchedulerWithExecutionContextComponent } from './scheduler-with-execution-context/scheduler-with-execution-context.component';
import { CombineLatestWithComponent } from './combine-latest-with/combine-latest-with.component';
import { OfVsFromComponent } from './of-vs-from/of-vs-from.component';
import { TakeUntilWithIntervalComponent } from './take-until-with-interval/take-until-with-interval.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { MergeAllComponent } from './merge-all/merge-all.component';

@NgModule({ declarations: [
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
        SchedulerWithAnimeAndIntervalComponent,
        SchedulerWithExecutionContextComponent,
        CombineLatestWithComponent,
        OfVsFromComponent,
        TakeUntilWithIntervalComponent,
        ExhaustMapComponent,
        MergeAllComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
