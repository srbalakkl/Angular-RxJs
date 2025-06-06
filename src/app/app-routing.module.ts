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
import {ExhaustMapComponent} from "./exhaust-map/exhaust-map.component";
import {MergeAllComponent} from "./merge-all/merge-all.component";
import {ReplaySubjectComponent} from "./replay-subject/replay-subject.component";
import {AsyncSubjectComponent} from "./async-subject/async-subject.component";
import {TakeWhileOperatorComponent} from "./take-while-operator/take-while-operator.component";
import {HotAndColdObservablesComponent} from "./hot-and-cold-observables/hot-and-cold-observables.component";
import {PreventMemoryLeaksComponent} from "./prevent-memory-leaks/prevent-memory-leaks.component";
import {ConcatAndExhaustMapComponent} from "./concat-and-exhaust-map/concat-and-exhaust-map.component";
import {SwitchMapVsExhaustMapComponent} from "./switch-map-vs-exhaust-map/switch-map-vs-exhaust-map.component";
import {
  ComputeAndLinkedSignalsComponent
} from "./signals/compute-and-linked-signals/compute-and-linked-signals.component";
import {EffectComponent} from "./signals/effect/effect.component";

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
  {path: 'switch_and_mergeMap', component: SwitchAndMergeMapComponent},
  {path: 'behaviourSubject', component: BehaviourSubjectComponent},
  {path: 'startWith', component: StartWithComponent},
  {path: 'schedulers', component: SchedulerComponent},
  {path: 'animeInterval', component: SchedulerWithAnimeAndIntervalComponent},
  {path: 'CombineLatestWith', component: CombineLatestWithComponent},
  {path: 'of_vs_from', component: OfVsFromComponent},
  {path: 'TakeUntilWithInterval', component: TakeUntilWithIntervalComponent},
  {path: 'ConcatAndExhaustMapComponent', component: ConcatAndExhaustMapComponent},
  {path: 'exhaustMap', component: ExhaustMapComponent},
  {path: 'mergeAll', component: MergeAllComponent},
  {path: 'replaySubject', component: ReplaySubjectComponent},
  {path: 'asyncSubject', component: AsyncSubjectComponent},
  {path: 'takeWhile', component: TakeWhileOperatorComponent},
  {path: 'hot_cold', component: HotAndColdObservablesComponent},
  {path: 'memoryLeak', component: PreventMemoryLeaksComponent},
  {path: 'SwitchMapVsExhaustMap', component: SwitchMapVsExhaustMapComponent},
  {path: 'com_link_signal', component: ComputeAndLinkedSignalsComponent},
  {path: 'effect_in_signal', component: EffectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
