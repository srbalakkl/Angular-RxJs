import {Component, OnInit} from '@angular/core';
import {Observable, of, takeWhile} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
    selector: 'app-take-while-operator',
    imports: [
        AsyncPipe
    ],
    templateUrl: './take-while-operator.component.html',
    styleUrl: './take-while-operator.component.sass'
})
export class TakeWhileOperatorComponent implements OnInit {

  // $displayVal!: Observable<number>;
  $displayVal!: Observable<number>;

  ngOnInit(): void {
    this.$displayVal = of(0, 1, 2, 0).pipe(//note: the 0 will not be emitted.
      takeWhile(value => (value < 2)),
    )
  }

}
