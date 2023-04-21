import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-rxjs-tutor',
  templateUrl: './rxjs-tutor.component.html',
  styleUrls: ['./rxjs-tutor.component.sass']
})
export class RxjsTutorComponent implements OnInit {

  agents!:Observable<string>;
  agentName!:string;

  constructor() { }

  ngOnInit(): void {
    this.agents = new Observable<string>(
      function (observer){
        try {
          // console.log('adsf');
          setTimeout(()=>{
            observer.next('gokul');
          },3000)
          setTimeout(()=>{
          observer.next('vinoth');
          },2000)
          setTimeout(()=>{
          observer.next('bala');
          },1000)
          setTimeout(()=>{
          observer.next('zxcv');
          },1000)
          setTimeout(()=>{
          observer.next('qwer');
          },1000)
          setTimeout(()=>{
          observer.next('uiop');
          },1000)
        }catch (e){
          console.log(e);
          observer.error(e)
        }
      }
    );

  //  now i'm subscribing the data
    this.agents.subscribe(data=>{
      console.log('the data = ',data)
      this.agentName = data;
      console.log('agent name = ',this.agentName)
    })
  }
}
