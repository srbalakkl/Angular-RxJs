import { Component, OnInit } from '@angular/core';
import {animationFrameScheduler, interval, Observable, take, tap} from "rxjs";

@Component({
  selector: 'app-scheduler-with-anime-and-interval',
  template: `
    <p>
      scheduler-with-anime-and-interval works!
    </p>
    <div [style.width.%]="progress$ | async"
         class="loader" style="height: 25px;background: green">
    </div><div [style.width.%]="progress$ | async" style="height: 25px;background: red">
    </div>
  `,
  styles: [
  ]
})
export class SchedulerWithAnimeAndIntervalComponent implements OnInit {

  // @ts-ignore
  progress$: Observable<number> = Observable<number>;
  // @ts-ignore
  progress2$: Observable<number> = Observable<number>;
  constructor() { }

  ngOnInit(): void {
    this.progress$ = interval(1000/60).pipe(take(100),tap(console.log));
    this.progress2$ = interval(0,animationFrameScheduler).pipe(take(100),tap(console.log));
  }
}
