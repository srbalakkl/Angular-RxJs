import {Component, OnInit} from '@angular/core';
import {asapScheduler, asyncScheduler, BehaviorSubject, delay, observeOn, of} from "rxjs";

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.sass']
})
export class SchedulerComponent implements OnInit {

  sub$ = new BehaviorSubject('Behavior Subject...!')
  constructor() {
  }

  ngOnInit(): void {
    this.runAsync();
    // this.runAsyncWithScheduler();
  }

  /**
   * The execution of JS code is based on the following priority.
   *
   * 1. normal/sync task,
   * 2. micro task,
   * 3. macro task.
   *
   * */

  runAsync() {
    setTimeout(() => console.log("setTimeout Callback"), 0);//macro/async task
    Promise.resolve("Promise Value").then(console.log);//micro task
    of("Stream Value").subscribe(console.log);//normal/sync task
    this.sub$.subscribe((r)=>console.log(r));//<- neither micro nor macro task
  }

  runAsyncWithScheduler() {
    /**
     * Even though 'of' & 'for' operator is an observable,It will execute the value synchronously instead of asynchronously
     * But this can be fixed by adding
     * observeOn(asapScheduler)->Convert it into microtask(ie execute 1st)
     * observeOn(asyncScheduler)->Convert it into macrotask(ie execute Last like setTimeout())
     * */

    console.log('***************')
    Promise.resolve("Promise Value").then(console.log);//micro task (1st Priority)
    of("Stream Value with asap scheduler").pipe(observeOn(asapScheduler)).subscribe(console.log);//converted async/microtask
    of("Stream Value (Synchronous Observable)").subscribe(console.log);//normal/sync task
    setTimeout(() => console.log("setTimeout Callback"), 0);//macro task

    // Here the asyncScheduler make our observable as microtask.
    of("Stream Value with delay async scheduler").pipe(delay(0, asyncScheduler)).subscribe(console.log);

  }

}
