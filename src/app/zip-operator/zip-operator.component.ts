import { Component, OnInit } from '@angular/core';
import {Observable, Subject, tap, zip} from "rxjs";

type Durum=['flat bread','meat','sauce','tomato','cabbage'];
@Component({
  selector: 'app-zip-operator',
  templateUrl: './zip-operator.component.html',
  styleUrls: ['./zip-operator.component.sass']
})
export class ZipOperatorComponent implements OnInit {
  shawarma$!:Observable<Durum>

  _flatBread = new Subject<'flat bread'>();
  _meat = new Subject<'meat'>();
  _souse = new Subject<'sauce'>();
  _tomato=new Subject<'tomato'>();
  _cabbage = new Subject<'cabbage'>();
  constructor() { }

  ngOnInit() : void {
    this.shawarma$ = zip(//<- this zip operator will make this observable work only
      // all the 5 observable data's are added.

      // NOTE:zip operator is very much similar to combine latest but combine latest will
      // emmit for each & every value after the required 5 value is reached.
      this._flatBread.pipe(tap(console.log)),
      this._meat.pipe(tap(console.log)),
      this._souse.pipe(tap(console.log)),
      this._tomato.pipe(tap(console.log)),
      this._cabbage.pipe(tap(console.log))
    ).pipe(
      tap((durum)=>console.log('Enjoy saamy!',durum))
    )

  }

}
