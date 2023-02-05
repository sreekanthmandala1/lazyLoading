import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss']
})
export class LifeCycleHooksComponent implements OnInit,OnChanges {
  constructor() {
    debugger
    console.log('constructor')
  }

  ngOnChanges(){
    debugger
    console.log('onChnages')
    this.onButtonClick();
  }

  ngOnInit(): void {
    debugger
    console.log('onInit')
  }

  onButtonClick(){
    debugger
    console.log('on changes button click')
  }
}
