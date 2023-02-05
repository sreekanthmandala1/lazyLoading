import { PersoonlijkTipsComponent } from './persoonlijk-tips/persoonlijk-tips.component';
import { PersoonlijkAnalysisComponent } from './persoonlijk-analysis/persoonlijk-analysis.component';
import { PersoonlijkScoresComponent } from './persoonlijk-scores/persoonlijk-scores.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'persoonlijkScores' , component: PersoonlijkScoresComponent},
  {path:'persoonlijkAnalysis' , component: PersoonlijkAnalysisComponent},
  {path:'persoonlijkTips' , component: PersoonlijkTipsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersoonlijkRoutingModule { }
