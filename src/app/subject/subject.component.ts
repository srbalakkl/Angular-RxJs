import {Component, OnInit} from '@angular/core';
import {from, Subject} from "rxjs";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.sass']
})
export class SubjectComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    /**
     *  A Subject is like an Observable,
     * but can multicast to many Observers.
     * Subjects are like EventEmitters: they maintain a registry of many listeners.
     *
     * */

    const subject: Subject<number> = new Subject<number>();

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    // subject.next(1);
    // subject.next(2);

    /**
     * Since subject is an observable,
     * You can provide the subject as an argument to subscribe.
     *
     * eg:     ---see below--
     * */

    const observable = from([10,20,30]);
    observable.subscribe(subject);

  }

}
