import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {TranslocoRootModule} from "../../transloco-root.module";
import {MaterialModule} from "../../modules/material.module";
import {PartialsModule} from "../../partials";

import {DASHBOARD_ROUTE, DashboardComponent} from './';

@NgModule({
  imports: [
    CommonModule,
    TranslocoRootModule,
    MaterialModule,
    PartialsModule,
    RouterModule.forChild([DASHBOARD_ROUTE])],
  declarations: [DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DashboardModule {
}
