import { Component, OnInit } from '@angular/core';
import {asapScheduler, asyncScheduler, observeOn, of} from "rxjs";

@Component({
  selector: 'app-scheduler-with-execution-context',
  template: `
    <p>
      scheduler-with-execution-context works!
    </p>
  `,
  styles: [
  ]
})
export class SchedulerWithExecutionContextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Task 1");//microtask
    console.log("Task 2");//microtask

    of("Task 3").subscribe(console.log);//microtask

    setTimeout(()=> {console.log("Task 4")}, 0)//macrotask

    const pm = new Promise( resolve => {
      resolve("Task 5");
    })
    pm.then(console.log);//microtask

    /** ***** Schedulers In Rxjs ***** **/
    of("Task 6").pipe(observeOn(asyncScheduler)).subscribe(console.log);//microtask is converted to macrotask
    of("Task 7").pipe(observeOn(asapScheduler)).subscribe(console.log);//microtask is converted to microtask
  }

}
