import { Component } from '@angular/core';

@Component({
  selector: 'app-persoonlijk-analysis',
  templateUrl: './persoonlijk-analysis.component.html',
  styleUrls: ['./persoonlijk-analysis.component.scss']
})
export class PersoonlijkAnalysisComponent {
  constructor(){
    console.log('Analysis loaded')
  }
}
