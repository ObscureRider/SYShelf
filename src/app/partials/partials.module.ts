import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';

// Component
import {PartialsComponent} from "./partials.component";

@NgModule({
  declarations: [PartialsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule
  ],
  exports: [PartialsComponent]
})

export class PartialsModule {
}
