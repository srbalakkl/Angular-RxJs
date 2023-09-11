import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RxjsTutorComponent} from "./rxjs-tutor/rxjs-tutor.component";
import {MapAndMaptoOperatorComponent} from "./map-and-mapto-operator/map-and-mapto-operator.component";
import {FromEventOperatorComponent} from "./form-event-operator/from-event-operator.component";
import {IntervalComponent} from "./interval/interval.component";
import {DebounceTimeComponent} from "./debounce-time/debounce-time.component";
import {TapOperatorComponent} from "./tap-operator/tap-operator.component";
import {
  DistinctUntilChangedOperatorComponent
} from "./distinct-until-changed-operator/distinct-until-changed-operator.component";
import {CombineLatestComponent} from "./combine-latest/combine-latest.component";
import {SwitchMapComponent} from "./switch-map/switch-map.component";
import {SubjectComponent} from "./subject/subject.component";
import {ZipOperatorComponent} from "./zip-operator/zip-operator.component";
import {BehaviourSubjectComponent} from "./behaviour-subject/behaviour-subject.component";
import {SwitchAndMergeMapComponent} from "./switch-and-merge-map/switch-and-merge-map.component";
import {StartWithComponent} from "./start-with/start-with.component";
import {SchedulerComponent} from "./scheduler/scheduler.component";
import {
  SchedulerWithAnimeAndIntervalComponent
} from "./scheduler-with-anime-and-interval/scheduler-with-anime-and-interval.component";
import {CombineLatestWithComponent} from "./combine-latest-with/combine-latest-with.component";
import {OfVsFromComponent} from "./of-vs-from/of-vs-from.component";
import {TakeUntilWithIntervalComponent} from "./take-until-with-interval/take-until-with-interval.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'home', component: RxjsTutorComponent},
  {path: 'map2', component: MapAndMaptoOperatorComponent},
  {path: 'fromEvent', component: FromEventOperatorComponent},
  {path: 'interval', component: IntervalComponent},
  {path: 'debounce', component: DebounceTimeComponent},
  {path: 'tap', component: TapOperatorComponent},
  {path: 'distUnchngOperator', component: DistinctUntilChangedOperatorComponent},
  {path: 'combineLatest', component: CombineLatestComponent},
  {path: 'switchmap', component: SwitchMapComponent},
  {path: 'subject', component: SubjectComponent},
  {path: 'zip', component: ZipOperatorComponent},
  {path: 'behaviourSubject', component: BehaviourSubjectComponent},
  {path: 'switch_and_mergeMap',component:SwitchAndMergeMapComponent},
  {path: 'behaviourSubject',component:BehaviourSubjectComponent},
  {path: 'startWith',component:StartWithComponent},
  {path: 'schedulers',component:SchedulerComponent},
  {path: 'animeInterval',component:SchedulerWithAnimeAndIntervalComponent},
  {path: 'CombineLatestWith',component:CombineLatestWithComponent},
  {path: 'of_vs_from',component:OfVsFromComponent},
  {path: 'TakeUntilWithInterval',component:TakeUntilWithIntervalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
