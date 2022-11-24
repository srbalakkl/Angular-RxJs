import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from "rxjs";

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
      setTimeout(_ => {
        data.next(1)
      }, 1000)
    })

    let $obs1 = new Observable((data) => {
      setTimeout(_ => {
        data.next(10)
      }, 5000)
    })

    combineLatest([$obs, $obs1]).subscribe((data) => {
      console.log('data', data)
    })

    /*  let x;
      of(1,2,3,4,5,6).pipe(
        map(r=>{ r*10; }),
      ).subscribe(r=>console.log(r));

      console.log(x);*/

  }

}
