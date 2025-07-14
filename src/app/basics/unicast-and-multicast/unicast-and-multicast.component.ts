import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-unicast-and-multicast',
  imports: [],
  templateUrl: './unicast-and-multicast.component.html',
  styleUrl: './unicast-and-multicast.component.sass'
})
export class UnicastAndMulticastComponent implements OnInit {
  ngOnInit(): void {

    let observable = new Observable((subscriber) => {
      subscriber.next(Math.random());
      subscriber.complete();
    })//<- observable is unicast.

    observable.subscribe(r => console.log('observable 1 = ', r));
    observable.subscribe(r => console.log('observable 2 = ', r));

    let subject = new Subject();//<- subject is multicast

    // subject.next(Math.random());   //<- since the `subject` is the HOT OBSERVABLE, data will be returned immediately.
    // so the value will not be emitted here.

    // or to say in another way, HOT OBSERVABLE is like watching a movie in a theater: The movie won't wait for you to start.
    // Just like `subject.next(Math.random())` line

    subject.subscribe(r => console.log('subject 1 =', r));
    subject.subscribe(r => console.log('subject 2 =', r));

    subject.next(Math.random());// value emitted here because it is hot observable and
    // it is called after the subscribe method.

  }

}
