import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {AgGridModule} from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
