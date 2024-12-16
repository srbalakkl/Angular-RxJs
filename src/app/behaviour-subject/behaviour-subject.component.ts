import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
    selector: 'app-behaviour-subject',
    templateUrl: './behaviour-subject.component.html',
    styleUrls: ['./behaviour-subject.component.sass'],
    standalone: false
})
export class BehaviourSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let mySubject = new BehaviorSubject<number>(0);

    mySubject.subscribe((x) => console.log('The first Subscription : ' + x));

    mySubject.next(1);
    mySubject.next(2);

    mySubject.subscribe((x) => console.log('The second Subscription : ' + x));

    mySubject.next(3);

// The first Subscription : 0 (since it's the initial value)
// The first Subscription : 1
// The first Subscription : 2
// The second Subscription : 2 (since it's the initial value for the second subscriber)
// The first Subscription : 3
// The second Subscription : 3
  }

}
