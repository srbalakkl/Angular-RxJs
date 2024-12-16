import {Component, OnInit} from '@angular/core';
import {combineLatest, exhaustMap, fromEvent, interval, Observable, switchMap, take} from "rxjs";

@Component({
  selector: 'app-switch-map-vs-exhaust-map',
  imports: [],
  templateUrl: './switch-map-vs-exhaust-map.component.html',
  styleUrl: './switch-map-vs-exhaust-map.component.sass'
})
export class SwitchMapVsExhaustMapComponent implements OnInit {
  ngOnInit(): void {

    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      exhaustMap(() => interval(1000).pipe(take(5)))//<- exhaust map will ignore an outer observable when it has an active subscription
    );

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(
    //   switchMap(() => interval(1000).pipe(take(5)))//<- switch map will ignore an inner observable when it has an active subscription
    // );

    result.subscribe(x => console.log(x));

  }

}
