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
  {path: 'zip',component:ZipOperatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
