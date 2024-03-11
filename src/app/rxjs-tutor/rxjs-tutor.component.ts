import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-rxjs-tutor',
  templateUrl: './rxjs-tutor.component.html',
  styleUrls: ['./rxjs-tutor.component.sass']
})
export class RxjsTutorComponent implements OnInit {

  agents!: Observable<string>;
  // agentName!: string;

  constructor() {
  }

  ngOnInit(): void {

    /**
     * @Publisher is a person who create an observable that contain subscriber's functions for the subscriber.
     * @Consumer is a person who subscribe() the observable.
     *
     */

    // PUBLISHER:
    this.agents = new Observable<string>(
      function (observer) {
        try {
          // console.log('adsf');
          setTimeout(() => {
            observer.next('gokul');
          }, 3000);

          setTimeout(() => {
            observer.next('vinoth');
          }, 2000);

          setTimeout(() => {
            observer.next('bala');
          }, 1000);

          setTimeout(() => {
            observer.next('zxcv');
          }, 1000);

          setTimeout(() => {
            observer.next('qwer');
          }, 1000);

          setTimeout(() => {
            observer.next('uiop');
          }, 1000);

        } catch (e) {
          console.log(e);
          observer.error(e)
        }
        // observer.complete();//<- If you enable this line none of the async code in the above observable got executed.
      }
    );


    // CONSUMER: now I'm subscribing the data

    // this.agents.subscribe(data => {
    //   console.log('the data = ', data)
    //   this.agentName = data;
    //   console.log('agent name = ', this.agentName)
    // })

    this.agents.subscribe({//<- Here we are subscribing to the observer (i.e, wrapped inside the {})
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    })


  }
}
