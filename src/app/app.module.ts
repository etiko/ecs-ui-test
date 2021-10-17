import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {AgGridModule} from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarsModule} from './cars/cars.module';
import {ActionsRendererComponent} from './cars/components/actions-renderer/actions-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionsRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
    AgGridModule.withComponents([
      ActionsRendererComponent
    ]),
    HttpClientModule,
    CarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
