import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';

const routes: Routes = [
  { path: '', component: AnalyticsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    AnalyticsComponent
  ]
})
export class AnalyticsRoutingModule { }
