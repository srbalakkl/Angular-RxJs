import {Component, OnInit} from '@angular/core';
import {interval, of, startWith} from "rxjs";

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.sass']
})
export class StartWithComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.example1();
    this.example2();
  }

  example1(){
    //emit (1,2,3,4,5,6)
    const source = of(1, 2, 3,4,5,6);
//start with 100
    const example = source.pipe(startWith(100));
//output: 100,1,2,3,4,5,6
    const subscribe = example.subscribe(val => console.log(val));
  }

  example2(){
    //emit values in sequence every 1s
    const source = interval(1000);
//start with -3, -2, -1
    const example = source.pipe(startWith(-3, -2, -1));
//output: -3, -2, -1, 0, 1, 2....
    const subscribe = example.subscribe(val => console.log(val));
  }

}
