import {Component} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from "rxjs";

@Component({
  selector: 'app-replay-subject',
  standalone: true,
  imports: [],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.sass'
})
export class ReplaySubjectComponent {
  constructor() {
    /**
     * @description Here <b> new Subject() </b> instance would print only <b> 2 and 3 </b>
     * */

    // const replaySubject = new Subject();
    // const replaySubject = new BehaviorSubject(0);
    const replaySubject = new ReplaySubject();
    replaySubject.next(1)

    replaySubject.subscribe((value) => {
      console.log('\nobserver 1', value);
    });

    replaySubject.next(2)
    replaySubject.next(3)

    replaySubject.subscribe((value) => {
      console.log('\nobserver 2', value);
    })

    replaySubject.next(4)
    // this.replaySubjectWithError();
    // this.withBufferSize()
    // this.withBufferTime()

  }


  replaySubjectWithError() {
    /**
     * @description ReplaySubject can emmit value even after the error is accrued.
     * */
      // const replaySubject = new Subject();
    const replaySubject = new ReplaySubject();
    replaySubject.next(1)

    replaySubject.subscribe((value) => {
      console.log('\nobserver 1', value);
    });

    replaySubject.next(2)
    replaySubject.next(3)
    replaySubject.error('Some error message');
    replaySubject.next(4)//<-will not emmit


    replaySubject.subscribe((value) => {//<- will emit even after error
      console.log('\nobserver 2', value);
    })
  }

  withBufferSize() {
    /**
     * @description
     * BufferSize - Define How many items are stored in an array,Default is infinite,
     * WindowTime - Time to hold the value in the buffer before removing it from the buffer.
     * */
      // const replaySubject = new Subject();
    const replaySubject = new ReplaySubject(1);
    replaySubject.next(1)

    replaySubject.subscribe((value) => {
      console.log('\nobserver 1', value);
    });

    replaySubject.next(2)
    replaySubject.next(3)

    replaySubject.subscribe((value) => {//<- here it show only one value,becz of size limit
      console.log('\nobserver 2', value);
    })

    replaySubject.subscribe((value) => {//<- here it show only one value,becz of size limit
      console.log('\nobserver 3', value);
    })
  }

  withBufferTime() {
    const replaySubject = new ReplaySubject(Infinity, 1000);
    replaySubject.next(1)

    replaySubject.subscribe((value) => {
      console.log('\nobserver 1', value);
    });

    replaySubject.next(2)
    replaySubject.next(3)

    replaySubject.subscribe((value) => {//<- here it show only one value,becz of size limit
      console.log('\nobserver 2', value);
    })

    setTimeout(() => {
      replaySubject.subscribe((value) => {//<- here it show only one value,becz of size limit
        console.log('\nobserver 3', value);
      })
    },2000);

  }

//   todo:buffer time here
}
