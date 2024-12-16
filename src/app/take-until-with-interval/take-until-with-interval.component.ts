import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, interval, take, tap, timer} from "rxjs";

@Component({
    selector: 'app-take-until-with-interval',
    templateUrl: './take-until-with-interval.component.html',
    styleUrls: ['./take-until-with-interval.component.sass'],
    standalone: false
})
export class TakeUntilWithIntervalComponent implements OnInit {

  private readonly refreshToken$ = new BehaviorSubject(0);

  constructor() {
  }

  ngOnInit(): void {
    let a = interval(1000)
    let time = timer(3000)

    a.pipe(
      // takeUntil(time)//<- takeUntil will make this stop after 3 sec.,
      take(3),//<- Take upto 3 value only,
      tap(r => console.log('rvalue', r))
    ).subscribe(r => console.log(r))

  }

}
