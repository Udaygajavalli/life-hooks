import { Component,OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'life-hooks';
  constructor(){
    console.log('constructor - parent');
    
  }
  ngOnInit(){
    console.log('OnInit - parent');
    
  }
  
  ngOnDestroy(){
    console.log('onDestroy - parent');
    
  }
}
