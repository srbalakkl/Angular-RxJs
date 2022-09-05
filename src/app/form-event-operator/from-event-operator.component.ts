import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-from-event-operator',
  templateUrl: './from-event-operator.component.html',
  styleUrls: ['./from-event-operator.component.sass']
})
export class FromEventOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('validate') validate?:ElementRef;


  getClickEvent() {
    const btnObs$ = fromEvent(this.validate?.nativeElement,'click');
    //since we want to create from click event I give event Name as click
    btnObs$.subscribe(data =>{
      console.log(data);
    })
  }


}
