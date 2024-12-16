import {Component, OnInit} from '@angular/core';
import {interval, map, merge, mergeAll, mergeMap, take} from "rxjs";

@Component({
    selector: 'app-merge-all',
    templateUrl: './merge-all.component.html',
    styleUrls: ['./merge-all.component.sass'],
    standalone: false
})
export class MergeAllComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    let source1$ = interval(1000).pipe(
      map((val) => `Source1$ = ${val}`),
      take(5)//take only upto 5 values from intervals emitting value
    )

    let source2$ = interval(2000).pipe(
      map((val) => `Source2$ = ${val}`),
      take(2)
    )


    // merge(source1$,source2$).subscribe(
    //   r=> console.log(r)
    // )

    source1$.pipe(
      map(val => source2$),//<- Here, we are creating a new source2$ for each and every value emitted by the source1$
      // So that,source1$ value will not print on the console.log
      mergeAll()//<- mergeAll is basically used to subscribe / receive all the values that are received from the source!$ observable
    ).subscribe( r => {
      console.log(r)
    })

    // Merge map is
    source1$.pipe(
      mergeMap(val => source2$),//<- emitted for each value emitted by the source1
    ).subscribe( r => {
      console.log(r)
    })


  }

}
