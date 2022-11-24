import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.sass']
})
export class DebounceTimeComponent implements OnInit {

  fg: FormGroup = this.fb.group({
    keypress: ['start value', null]
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    /**
     * the problem with the below line is,
     * We can't use this with API calls.
     */
    // this.fg.get('keypress')?.valueChanges.subscribe(data=>{
    //   console.log(data)
    // });

    /**
     * @description
     * Emits a notification from the source Observable only
     * after a particular time span has passed without another source emission.
     *
     * @param
     * It supports two parameters.
     * 1.dueTime
     * 2.scheduler
     *
     * dueTime:
     * Timeout Duration in milliseconds
     *
     * scheduler:
     * Optional. Default is asyncScheduler.
     *
     * note:It is mainly used in search operation. because,
     * You don't want to make API call for every single keys(valueChange event by FormControl)
     * pressed by an end user.
     * */

    this.fg.get('keypress')?.valueChanges.pipe(debounceTime(1000))
      .subscribe(data => {
        console.log(data);
      })
    //   now this can send a data after 1 sec
  }

}
