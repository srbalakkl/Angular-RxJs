import {Component, effect, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.sass'
})
export class EffectComponent implements OnInit {

  greet = signal('Hi..');

  constructor() {
    // note: The effect() must be used with constructor only.
    effect(() => {
      console.log('Effect =', this.greet())
    });
  }

  ngOnInit(): void {
    console.log('Normal Greet =', this.greet())

    setTimeout(() => {
      this.greet.set('hello..')
    }, 1000)

    console.log('Normal Greet =', this.greet())
  }

}
