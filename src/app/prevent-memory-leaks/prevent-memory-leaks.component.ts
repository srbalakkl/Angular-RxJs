import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject, takeUntil} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-prevent-memory-leaks',
  imports: [],
  templateUrl: './prevent-memory-leaks.component.html',
  standalone: true,
  styleUrl: './prevent-memory-leaks.component.sass'
})
export class PreventMemoryLeaksComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    interval(1000).pipe(
      takeUntil(this.unsubscribe$),
      takeUntilDestroyed(this.destroyRef)//another way to prevent m/y leaks,but it works only after @angular/core16 version.
      // note:
      // takeUntilDestroyed()
      // operator must be put at the end of the line because it will now work for downstream observable
      // and cause m/y leak if placed in the wrong place
    ).subscribe(r => console.log(r));
  }

  ngOnDestroy() {
    // this.unsubscribe$.next();
    // this.unsubscribe$.complete();
  }


}
