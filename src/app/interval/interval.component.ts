import { Component, OnInit } from '@angular/core';
import {from, interval, Observable, take} from "rxjs";

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.sass']
})
export class IntervalComponent implements OnInit {
  /**
   * Creates an Observable that emits sequential numbers every specified interval of time, on a specified SchedulerLike.
   */

  constructor() { }

  ngOnInit(): void {
    this.aryOfObs$.subscribe(data=>{
      // console.log(data)
      const seqObs$ = interval(1000);

      seqObs$.subscribe(num=>{
        if (num<3)//becz I want to print it three times only
        console.log(data,num)
      })

      //*******OR*******

      seqObs$.pipe(take(3)).subscribe(num => {
        console.log(data,num)
      })

    })
  }
  aryOfObs$:Observable<string> = from(['one','two','three']);
//  note: if we use of operator here then it will print the entire array not a single array
//  note: When u use of operator don't forget to put the <string[]> in type declaration

}
