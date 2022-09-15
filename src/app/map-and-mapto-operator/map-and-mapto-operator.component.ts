import { Component, OnInit } from '@angular/core';
import {map, mapTo, Observable, of} from "rxjs";

@Component({
  selector: 'app-map-and-mapto-operator',
  templateUrl: './map-and-mapto-operator.component.html',
  styleUrls: ['./map-and-mapto-operator.component.sass']
})
export class MapAndMaptoOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('hello')
    /**
     * * Example for normal map
     * RxJS map()
     * operator is a transformation operator
     * used to transform the items emitted by an Observable by applying a function to each item.
     *
     * o/p:
     * the r value = 11
     * the r value = 12
     * the r value = 13
     * the r value = 14
     * the r value = 15
     * the r value = 16
     */
    of(1,2,3,4,5,6)
      .pipe(map(v=>v+10))//here the pipe() in used to combine the multiple operator
      // .subscribe(console.log)
      .subscribe(r=>console.log(`the r value = \n ${r}`));

    /**
     * mapTo()
     * Similar to map but,
     * It shows whatever value you provided on it
     *
     * o/p: (below statement is executed 6 times)
     * the r value = request
     */
    of(1,2,3,4,5,6)
      .pipe(mapTo("request"))
      .subscribe(r=>console.log(`the r value of mapTo = \n ${r}`));
  }

}
