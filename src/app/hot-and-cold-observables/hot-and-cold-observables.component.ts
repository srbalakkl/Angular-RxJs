import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {interval, share} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-hot-and-cold-observables',
  imports: [],
  templateUrl: './hot-and-cold-observables.component.html',
  standalone: true,
  styleUrl: './hot-and-cold-observables.component.sass'
})
export class HotAndColdObservablesComponent implements OnInit,OnDestroy {
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    this.coldObservable();
    this.hotObservable();
  }

  coldObservable() {
    const coldObservable$ = interval(1000); // Emits numbers every second

// First subscription
    const subscription1 = coldObservable$.subscribe(value => console.log('First:', value));

// Second subscription (after 5 seconds)
    setTimeout(() => {
      const subscription2 = coldObservable$.subscribe(value => console.log('Second:', value));
    }, 5000);
  }

  hotObservable() {
    const hotObservable = interval(1000).pipe(share()); // Share the source with multiple subscribers
//      share() operator to convert it into a hot observable.
//     Returns a new Observable that multicasts (shares) the original Observable
//      The share() operator is useful when you need to prevent repeated API calls or costly operations executed by Observables.


// First subscription
    const subscription1 = hotObservable.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => console.log('First:', value));
// takeUntilDestroyed(this.destroyRef) will work form @angular/code 16 above to unsubscribe the subscription when the component is destroyed.
// Second subscription (after 5 seconds)
    setTimeout(() => {
      const subscription2 = hotObservable.subscribe(value => console.log('Second:', value));
    }, 5000);
  }

  ngOnDestroy(): void {

  }

}
