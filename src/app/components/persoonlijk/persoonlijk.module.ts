import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersoonlijkRoutingModule } from './persoonlijk-routing.module';
import { PersoonlijkScoresComponent } from './persoonlijk-scores/persoonlijk-scores.component';
import { PersoonlijkAnalysisComponent } from './persoonlijk-analysis/persoonlijk-analysis.component';
import { PersoonlijkTipsComponent } from './persoonlijk-tips/persoonlijk-tips.component';


@NgModule({
  declarations: [
    PersoonlijkScoresComponent,
    PersoonlijkAnalysisComponent,
    PersoonlijkTipsComponent
  ],
  imports: [
    CommonModule,
    PersoonlijkRoutingModule
  ]
})
export class PersoonlijkModule { }
