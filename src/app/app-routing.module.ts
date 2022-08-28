import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RxjsTutorComponent} from "./rxjs-tutor/rxjs-tutor.component";

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:RxjsTutorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
