import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarComponent } from './components/car/car.component';
import { CarGridComponent } from './components/car-grid/car-grid.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ActionsRendererComponent } from './components/actions-renderer/actions-renderer.component';


@NgModule({
  declarations: [CarComponent, CarGridComponent, LandingPageComponent, ActionsRendererComponent],
  imports: [
    CommonModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
