import {Component, computed, linkedSignal, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-compute-and-linked-signals',
  imports: [],
  templateUrl: './compute-and-linked-signals.component.html',
  styleUrl: './compute-and-linked-signals.component.sass'
})
export class ComputeAndLinkedSignalsComponent implements OnInit {

  readonly signal_count = signal(0);

  ngOnInit(): void {
    console.log('Initial signal count=', this.signal_count)

    let compute_count = computed(() => this.signal_count() + 1);//By default, compute_count don't have set() method.
    this.signal_count.set(100);//now the compute_count value is also changed even though it's value is assigned before set() method is called.

    // compute_count.set(1000);//this will throw an error because compute_count don't have set() method.
    console.log('compute count=', compute_count())

    let linked_count = linkedSignal(() => this.signal_count() + 20);
    linked_count.set(200);
    console.log('linked count=', linked_count())


    this.signal_count.update((v) => v + 300);//The major difference between linkedSignal and computed is
    // that linkedSignal support updating value by its own value.
    console.log('final signal count=', this.signal_count())

  }

}
