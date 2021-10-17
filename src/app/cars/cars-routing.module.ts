import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {CarComponent} from './components/car/car.component';


const routes: Routes = [
  {path: 'cars', component: LandingPageComponent},
  {path: 'cars/:functionName', component: CarComponent},
  {path: 'cars/:functionName/:id', component: CarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule {
}
