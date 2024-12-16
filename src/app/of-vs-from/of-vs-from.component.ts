import { Component, OnInit } from '@angular/core';
import {from, of} from "rxjs";

@Component({
    selector: 'app-of-vs-from',
    templateUrl: './of-vs-from.component.html',
    styleUrls: ['./of-vs-from.component.sass'],
    standalone: false
})
export class OfVsFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // https://dev.to/blamb31/of-vs-for-how-to-use-each-and-what-is-the-difference-1h9n

    /**
     *
     * Of: Emit Sync values
     *
     * From: Emit Async values
     *
     *
     * Of: Emits a sequence of values you specify as arguments.
     *
     * From: Convert various data sources into observables and then emits the values from those sources sequentially.
     *
     *
     * Of : Does not take an array, iterable, promise, or another observable-like source as a single argument.
     * Instead, it takes any number of arguments, each of which represents a value to be emitted by the observable.
     *
     * From: Used to create an observable from an array, iterable, promise, or other observable-like sources.
     * It can convert various data sources into observables.
     *
     *
     * */

    this.of_Operator();
    this.fromOperator();
  }

  fromOperator(){
    const str = 'Hello World';
    const str$ = from(str);
    str$.subscribe((result) => console.log({ result }));
// Will emit each character from the given string
// result: "H"
// result: "e"
// result: "l"
// result: "l"
// result: "o"
// result: " "
// result: "W"
// result: "o"
// result: "r"
// result: "l"
// result: "d"

    const arr = [1, 2, 3];
    const arr$ = from(arr);
    arr$.subscribe((result) => console.log({ result }));
// Will emit each value within the array that was given as input to the operator.
// result: 1
// result: 2
// result: 3

    const imAPromise = fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(
      (response) => response.json()
    );
    const imAPromise$ = from(imAPromise);
    imAPromise$.subscribe((result) => console.log({ result }));
// Will emit the return value of the endpoint that we called to get the information about "Ditto".
// result: This will now be an object of information about the pokemon "Ditto".

    function* iterator() {
      const values = ['iterator-1', 'iterator-2', 'iterator-3'];
      for (let i = 0; i < values.length; i++) {
        yield values[i];
      }
    }

    const imAnIterable = iterator();
    const imAnIterable$ = from(imAnIterable);
    imAnIterable$.subscribe((result) => console.log({ result }));
// Will emit each value that we gave to the iterator item within the function
// result: "iterator-1"
// result: "iterator-2"
// result: "iterator-3"
  }

  of_Operator(){
    /******** of Operator in rxjs *********/
    const str = 'Hello World';
    const str$ = of(str);
    str$.subscribe((result) => console.log({ result }));
// Will emit a single item with the type of string
// result: "Hello World"

    const arr = [1, 2, 3];
    const arr$ = of(arr);
    arr$.subscribe((result) => console.log({ result }));
// Will emit a single item with the type of Array<number>
// result: [1,2,3]

    const arr2 = [4, 5, 6];
    const arr2$ = of(arr, arr2);
    arr2$.subscribe((result) => console.log({ result }));
// Will emit a single two values each with the type of Array<number>
// result: [1,2,3]
// result: [4,5,6]

    const imAPromise = fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(
      (response) => response.json()
    );
    const imAPromise$ = of(imAPromise);
    imAPromise$.subscribe((result) => console.log({ result }));
// Will emit a single item with the type of Promise
// result: Promise

    function* iterator() {
      const values = ['iterator-1', 'iterator-2', 'iterator-3'];
      for (let i = 0; i < values.length; i++) {
        yield values[i];
      }
    }

    const imAnIterable = iterator();
    const imAnIterable$ = of(imAnIterable);
    imAnIterable$.subscribe((result) => console.log({ result }));
// Will emit a single item with the type of Object
// result: Object
  }

}
