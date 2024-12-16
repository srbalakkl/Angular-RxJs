import {Component, OnInit} from '@angular/core';
import {
  BehaviorSubject,
  concatMap,
  exhaustMap, filter,
  fromEvent,
  interval,
  mergeMap,
  Observable,
  of,
  switchMap,
  take, tap
} from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-exhaust-map',
    templateUrl: './exhaust-map.component.html',
    styleUrls: ['./exhaust-map.component.sass'],
    standalone: false
})
export class ExhaustMapComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  click$ = fromEvent(document, 'click');
  test$: Observable<any> | undefined;

  ngOnInit(): void {
    /**********Example 1 *********/
    this.click$.pipe(
      exhaustMap(() => interval(1000).pipe(take(3)))
    )

    this.click$.subscribe(r => {
      console.log('event = ', r)
    })
    /*****************************/

    /**********Example 2 ********/
    // let postIds$ = of(1, 2, 3, 4, 5);
    //
    // postIds$.pipe(exhaustMap(id => this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)))
    //   .subscribe((data) => console.log(data))
    /*****************************/

    /**********Example 3 ********/
    let test$ = interval(100)//<- produce sequence of number every sec/minutes specified
      .pipe(
        filter(val => (val > 0)),
        take(5),
        tap(x => {
          console.log(`x=${x}`)
        })
      );

    test$.pipe(
      exhaustMap(id => this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`))
    ).subscribe((x)=> {
      console.log(`val ${x}`)
    })

    // this.test$.subscribe(r=>{
    //   console.log(r)
    // })

    //
    // let $obs = new Observable((data) => {
    //   setTimeout(() => {
    //     data.next(1)
    //   }, 500)
    // })
    //
    // let $obs1 = new Observable((data) => {
    //   setTimeout(() => {
    //     data.next(10)
    //   }, 1000)
    //
    //   setTimeout(() =>data.next(100),2000);//<- CombineLatest will also
    //   // emit values whenever the value is changed.
    //   // But the "Zip Operator" doesn't work when the value is changed.
    // })
    //
    // let $obs2 = new Observable((data) => {
    //   setTimeout(() => {
    //     data.next(1000)
    //   },2500)
    // })
    //
    // combineLatest([$obs, $obs1, $obs2,this.refreshToken$]).subscribe((data) => {
    //   console.log('CombineLatest Operator: Data after 500 + 1000 (+2000) + 2500 millisecond', data)
    // })


  }

  refreshToken$ = new BehaviorSubject(undefined);

}
