import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {map, mergeMap, Observable, of, Subject, Subscription, switchMap, takeWhile} from "rxjs";

@Component({
    selector: 'app-switch-map',
    templateUrl: './switch-map.component.html',
    styleUrls: ['./switch-map.component.sass'],
    standalone: false
})
export class SwitchMapComponent implements OnInit,AfterViewInit {

  constructor(private cd:ChangeDetectorRef) {
  }

  counter= 0;
  obs$!:Observable<any>

  ngOnInit(): void {

    /*
    * The Angular SwitchMap maps each value from the source observable(outer observable) into an inner observable(returned observable),
    *   Basically it switches to the newest observable discarding all other observable.
    *
    * * The difference between map & switchMap operators are
    *
    * * Map operator doesn't take multiple inner/returned observable but switchMap does,
    * * Map support normal input values but switchMap support only observable as returned values.
    *
    * */

    let obs$ = of(10, 20, 30, 40, 50).pipe(
      switchMap(x => of(x, x + 1, x + 2,"\n")),
      // mergeMap(m=> of('m'))
      // map(x=> x+2)//remove /n to make the switch map works
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

  ngAfterViewInit(): void {
    this.obs$ = of(10, 20, 30, 40, 50).pipe(
      switchMap(x => of(x, x + 1, x + 2,"\n")),
      // mergeMap(m=> of(m,m+1,m+2,"\n"))//check the durum component for correct mergeMap() operator.
      // map(x=> x+2)//remove /n to make the switch map works
    );

    // console.log(this.cd.detectChanges())

    // this.obs$.subscribe(x => {
    //   this.counter = x;
    //   console.log(x)
    // });

  }


}
