import {Component, OnInit} from '@angular/core';
import {of, tap} from "rxjs";

@Component({
  selector: 'app-tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrls: ['./tap-operator.component.sass']
})
export class TapOperatorComponent implements OnInit {

  data = [];
  data1 = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  tap() {
    of(1, 2, 3, 4, 5, 6, 7, 8, 9)
      .pipe(tap(x => {
        /**
         * Whatever we are done here will not affect the output value
         * ie Even if we change the x value,
         * It doesn't get affected in subscribe/output value.
         */

        x = x * 10;
        // this.data.push(x)
        console.log('From tap ', x);
      }))
      .subscribe({
        next(x) {
          console.log(x)
        }
      });

    // setTimeout(()=>{
    //   console.log(this.data1)
    // },100);
  }
}
