import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, combineLatestWith, Observable, zip} from "rxjs";

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.sass']
})
export class CombineLatestComponent implements OnInit {
  //For CombineLatest to work 'each observable' (actually it'll wait for emit) is needed to emit at latest one value
  // if one of the observable is not emitting the value,
  // then combine latest will become failed to produce output

  //To use Combine Latest We need "Pass all the Observable as the Array."
  constructor() {
  }

  ngOnInit(): void {

    /**
     * @description
     * Combines multiple Observables to create an Observable
     * whose values are calculated from the latest values of each of its input Observables.*/

    let $obs = new Observable((data) => {
      setTimeout(() => {
        data.next(1)
      }, 500)
    })

    let $obs1 = new Observable((data) => {
      setTimeout(() => {
        data.next(10)
      }, 1000)

      setTimeout(() =>data.next(100),2000);//<- CombineLatest will also
      // emit values whenever the value is changed.
      // But the "Zip Operator" doesn't work when the value is changed.
    })

    let $obs2 = new Observable((data) => {
      setTimeout(() => {
        data.next(1000)
      },2500)
    })

    combineLatest([$obs, $obs1, $obs2,this.refreshToken$]).subscribe((data) => {
      console.log('CombineLatest Operator: Data after 500 + 1000 (+2000) + 2500 millisecond', data)
    })

    zip($obs, $obs1).subscribe((data) => {//<- Note: This zip operator doesn't work when the value is changed from 10 to 100
      console.log('Zip Operator:doesn\'t work when the value is changed from 10 to 100', data)
    })

    $obs.pipe(
      combineLatestWith([$obs1,$obs2,this.refreshToken$])
    ).subscribe((data) => {
      console.log('CombineLatestWith Operator: Data after 500 + 1000 (+2000) + 2500 millisecond', data)
    })

    /*  let x;
      of(1,2,3,4,5,6).pipe(
        map(r=>{ r*10; }),
      ).subscribe(r=>console.log(r));

      console.log(x);*/

  }

  refreshToken$ = new BehaviorSubject(undefined);
  refresh(){
    this.refreshToken$.next(undefined)
    this.refreshToken$.complete();
  }

}
