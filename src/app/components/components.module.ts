import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficosBarraHorizontalComponent } from './graficos-barra-horizontal/graficos-barra-horizontal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    GraficosBarraHorizontalComponent
  ],
  exports: [
    NavbarComponent,
    GraficosBarraHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class ComponentsModule { }
