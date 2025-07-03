import {Component, OnInit} from '@angular/core';
import {interval, map, mergeAll, take} from "rxjs";

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
      map(val => source2$),//<- Here, I'm mapping the source2$ to all the source 1$ observable individually
      // So that,source1$ value will not print on the console.log
      mergeAll()//<- mergeAll is basically used to subscribe / receive all the values that are received from the source2$ observable
      //   if mergeAll() is not used than only the source2$ observable operator (not it's value) will be emitted.
    ).subscribe(r => {
      console.log(r)
    })

    // // Merge map is the combination of map() + mergeAll() and basically both of the operators are used to subscribe to values of the observable.
    // source1$.pipe(
    //   mergeMap(val => source2$),//<- emitted for each value emitted by the source1
    // ).subscribe( r => {
    //   console.log(r)
    // })


  }

}
