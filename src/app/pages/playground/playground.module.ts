import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// Modules
import {TranslocoRootModule} from '../../transloco-root.module';
import {MaterialModule} from "../../modules/material.module";
import {PartialsModule} from "../../partials";

// Services
import {LangService} from "../../services/lang.service";

import {PlaygroundRoute, PlaygroundComponent} from "./";

@NgModule({
  imports: [
    CommonModule,
    TranslocoRootModule,
    MaterialModule,
    PartialsModule,
    RouterModule.forChild([PlaygroundRoute]),
  ],
  declarations: [PlaygroundComponent],
  providers: [
    LangService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PlaygroundModule {
}
