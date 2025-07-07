import { Component } from '@angular/core';
import {AsyncSubject} from "rxjs";

@Component({
    selector: 'app-async-subject',
    imports: [],
    templateUrl: './async-subject.component.html',
    styleUrl: './async-subject.component.sass'
})
export class AsyncSubjectComponent {

  constructor() {
    // RxJS v6+
    const sub = new AsyncSubject();

    sub.subscribe(console.log);
    sub.next(123);
    sub.subscribe(console.log);
    sub.next(500)
    sub.next(456);
    sub.complete(); //Both subscribers log only the last 456
  }


}
