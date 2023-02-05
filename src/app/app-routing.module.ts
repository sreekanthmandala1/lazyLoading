import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxSelectComponent } from './components/checkbox-select/checkbox-select.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'lifeCycle', component:LifeCycleHooksComponent},
  {path:'checkbox', component : CheckboxSelectComponent},
  {path:'persoonlijk', loadChildren:()=>import('./components/persoonlijk/persoonlijk.module').then(mod=>mod.PersoonlijkModule)},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
