import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject, takeUntil} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-prevent-memory-leaks',
  standalone: true,
  imports: [],
  templateUrl: './prevent-memory-leaks.component.html',
  styleUrl: './prevent-memory-leaks.component.sass'
})
export class PreventMemoryLeaksComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    interval(1000).pipe(
      takeUntil(this.unsubscribe$),
      // takeUntilDestroyed(this.destroyRef)//another way to prevent m/y leaks. but, it works only after @angular/code16 version.
      ).subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}
