import {Component, OnInit} from '@angular/core';
import {of, switchMap} from "rxjs";

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.sass']
})
export class SwitchMapComponent implements OnInit {

  constructor() {
  }

  counter = 0;

  ngOnInit(): void {

    /*
    * The Angular SwitchMap maps each value from the source observable into an inner observable,
    *   Basically it switches to the newest observable discarding all other observable.
    * */

    let obs$ = of(10, 20, 30, 40, 50).pipe(
      switchMap(x => of(x, x + 1, x + 2)),
    ).subscribe(x => console.log(x));

    // obs$.subscribe(x=> console.log(x))
    // of(1,2,3,4,5).pipe

    /*    fromEvent(document,'click')
          .pipe(switchMap(_=>interval(500)))
          //interval() emmit the number in a sequence of time.
          .subscribe(r =>(this.counter = r))

        of(1,2,3,4,5)
          .pipe(
            switchMap((id) =>{
              return null;
            })
          )
          .subscribe((r)=>console.log(r))*/

  }


}
