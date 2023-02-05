import { Component } from '@angular/core';

@Component({
  selector: 'app-persoonlijk-scores',
  templateUrl: './persoonlijk-scores.component.html',
  styleUrls: ['./persoonlijk-scores.component.scss']
})
export class PersoonlijkScoresComponent {
constructor(){
  console.log('Scores loaded')
}
}
