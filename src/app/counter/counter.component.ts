import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public counterValue:number = 0;
  increment() {
    this.counterValue++;
  }
  decrement() {
    this.counterValue--;
  }

}
