import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnDestroy {
  data:any;
  constructor() {
    console.log('Constructor - child');
  }
  ngOnInit(): void {
    console.log('OnInit - child');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy- child');
  }
}
