import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RxjsTutorComponent} from "./rxjs-tutor/rxjs-tutor.component";
import {MapAndMaptoOperatorComponent} from "./map-and-mapto-operator/map-and-mapto-operator.component";
import {FromEventOperatorComponent} from "./form-event-operator/from-event-operator.component";
import {IntervalComponent} from "./interval/interval.component";

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:RxjsTutorComponent},
  {path:'map2',component:MapAndMaptoOperatorComponent},
  {path:'fromEvent',component:FromEventOperatorComponent},
  {path:'interval',component:IntervalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
