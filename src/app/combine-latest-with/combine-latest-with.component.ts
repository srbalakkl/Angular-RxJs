import { Component, OnInit } from '@angular/core';
import {combineLatestWith, map, Observable, of} from "rxjs";

@Component({
  selector: 'app-combine-latest-with',
  templateUrl: './combine-latest-with.component.html',
  styleUrls: ['./combine-latest-with.component.sass']
})
export class CombineLatestWithComponent implements OnInit {

  // Note:Check Combine Latest Component also for CombineLatestWith

  hello$:Observable<string> = of('hello').pipe(
    combineLatestWith(of('world')),
    map(([hello,world])=>hello+' - ' + world)
  )
  constructor() { }

  ngOnInit(): void {
    this.hello$.subscribe(r=>{
      console.log(r)
    })
  }

}
