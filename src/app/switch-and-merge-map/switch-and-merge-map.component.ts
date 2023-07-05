import {Component, OnInit} from '@angular/core';
import {map, Observable, Subject, switchMap, take, tap, zip} from "rxjs";

type Durum = ['flat bread', 'meat', 'sauce', 'tomato', 'cabbage'];

interface Order {
  amount: number;
  customer_id: number;
}

interface Product {
  product_name: Durum;
  customer_id: number;
}

let customer_id = 0;

@Component({
  selector: 'app-switch-and-merge-map',
  templateUrl: './switch-and-merge-map.component.html',
  styleUrls: ['./switch-and-merge-map.component.sass']
})
export class SwitchAndMergeMapComponent implements OnInit {
  shawarma$!: Observable<Durum>;
  delivery$!: Observable<Product>;

  _order = new Subject<Order>();

  _flatBread = new Subject<'flat bread'>();
  _meat = new Subject<'meat'>();
  _souse = new Subject<'sauce'>();
  _tomato = new Subject<'tomato'>();
  _cabbage = new Subject<'cabbage'>();

  constructor() {
  }

  ngOnInit(): void {
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
      tap((durum) => console.log('Enjoy the durum!', durum))
    )


    /**
     *
     * Here the problem with this method is, The ts compiler shows the
     * error TS2322: Type 'Observable<Durum>' is not assignable to type 'Observable<Product>'.
     *
     */

    /*     this.delivery$ = this._order.pipe(
         tap(order => console.log('New Order : ', order)),
         //   once we get an order then we have to cook the durum so that
         //   we have to merge our durum stream into our delivery stream.
         mergeMap(order => this.shawarma$),
         //   here the mergeMap will wait for durum(shawarma) to emit some value & after
         //   the emission mergeMap will subscribe the durum.
         tap(product => console.log('Deliver the Product : ', product))
         );*/

    this.delivery$ = this._order.pipe(
      tap(order => console.log('New Order : ', order)),
      //   once we get an order then we have to cook the durum so that
      //   we have to merge our durum stream into our delivery stream.

      // mergeMap(({amount, customer_id}) => this.shawarma$.pipe(
      switchMap(({amount, customer_id}) => this.shawarma$.pipe(//<- switchMap is very much
        // similar to tha mergeMap but the only diff is switchMap doesn't keep the previous one.
        // This shawarma part will be executed only after the above part / all ingredient buttons are pressed.
        take(amount),
        map(durum => ({product_name: durum, customer_id}))//<- Destructuring using aero function.
        //   Here in the map() operator we are adding all shawarma to delivery$ observables product name.
      )),

      //   here the mergeMap will wait for durum(shawarma) to emit some value & after
      //   the emission mergeMap will subscribe the durum.
      tap(product => console.log('Deliver the Product : ', product))
    );
  }

  dispatchOrder() {
    const amount = Math.floor(Math.random() * 3) + 1;
    ++customer_id;
    this._order.next({amount, customer_id})
  }
}
