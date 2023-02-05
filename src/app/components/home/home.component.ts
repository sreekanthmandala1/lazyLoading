import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router : Router){

  }

  persoonlijkScores(){
    this.router.navigate(['/','persoonlijk','persoonlijkScores'])
  }

  persoonlijkAnalysis(){
    this.router.navigate(['/','persoonlijk','persoonlijkAnalysis'])
  }

  persoonlijkTips(){
    this.router.navigate(['/','persoonlijk','persoonlijkTips'])
  }
}
