import { Component } from '@angular/core';

@Component({
  selector: 'app-persoonlijk-tips',
  templateUrl: './persoonlijk-tips.component.html',
  styleUrls: ['./persoonlijk-tips.component.scss']
})
export class PersoonlijkTipsComponent {
  constructor(){
    console.log('Tips loaded')
  }
}
