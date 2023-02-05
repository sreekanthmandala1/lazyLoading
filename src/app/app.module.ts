import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { HomeComponent } from './components/home/home.component';
import { CheckboxSelectComponent } from './components/checkbox-select/checkbox-select.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHooksComponent,
    HomeComponent,
    CheckboxSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
