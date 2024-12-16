import {Component, OnInit} from '@angular/core';
import {distinctUntilChanged, from} from "rxjs";

@Component({
    selector: 'app-distinct-until-changed-operator',
    templateUrl: './distinct-until-changed-operator.component.html',
    styleUrls: ['./distinct-until-changed-operator.component.sass'],
    standalone: false
})
export class DistinctUntilChangedOperatorComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    const source$ = from([
      {name: 'bala'},
      {name: 'vinoth'},
      {name: 'gokul'},
      {name: 'gokul'},
      {name: 'gokul'},
      {name: 'gokul'}
    ]);

    //distinctUntilChanged will compare the current value with the previous value & produce the output based on it
    //  ie It works just like === operator
    //  eg: it prints gokul only once even-though there is multiple gokul
    source$.pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
      .subscribe(console.log);
  }

}
