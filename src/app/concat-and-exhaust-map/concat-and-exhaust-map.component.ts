import { Component, OnInit } from '@angular/core';
import {of, Subject} from "rxjs";

@Component({
    selector: 'app-concat-and-exhaust-map',
    templateUrl: './concat-and-exhaust-map.component.html',
    styleUrls: ['./concat-and-exhaust-map.component.sass'],
    standalone: false
})
export class ConcatAndExhaustMapComponent implements OnInit {

  order = new Subject<{id:number}>();
  constructor() { }

  ngOnInit(): void {
    this.run();
  }

  /**
   * Note: This is an advanced topic
   *
   * MicroTask:Has highest priority on call stack (while execution) after normal execution
   *
   * MacroTask:Has lowest priority ie it execute after Microtask
   *
   * */

  run(){
    console.log("Regular Console.log");
    requestAnimationFrame(()=>console.log("Animation Frame"));
    setTimeout(()=>console.log("SetTimeOut callback"));
    Promise.resolve("Promise Value").then(console.log);
    of("Stream Value").subscribe(console.log)
  }

}
