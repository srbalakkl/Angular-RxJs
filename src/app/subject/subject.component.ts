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

  subject!: Subject<any>;

  ngOnInit(): void {

    /**
     *  A Subject is like an Observable,
     * but can multicast to many Observers.
     * Subjects are like EventEmitters: they maintain a registry of many listeners.
     *
     * Note :Every Subject is an <b>Observable and an Observer</b>. You can subscribe to a Subject, and you can call next to feed values as well as error and complete
     *
     * */

    // const subject: Subject<number> = new Subject<number>();
    this.subject = new Subject<number>();

    this.subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
    this.subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    this.subject.next(1);
    this.subject.next(2);
    this.subject.next(() => {
      console.log('\n')
    });

    /**
     * Since subject is an observable,
     * You can provide the subject as an argument to subscribe.
     *
     * eg:     ---see below--
     * */

    const observable = from([10, 20, 30]);
    observable.subscribe(this.subject);

  }

  addMoreValueToSubject() {
    const observable = from([40, 50]);
    observable.subscribe(this.subject);
  }

}
