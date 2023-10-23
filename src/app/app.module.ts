import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgTableComponent } from './components/ag-table/ag-table.component';
import { NavBArComponent } from './components/nav-bar/nav-bar.component';
import{ HttpClientModule } from '@angular/common/http';


import 'ag-grid-enterprise';
import { MyCellComponent } from './components/my-cell/my-cell.component';


@NgModule({
  declarations: [
    AppComponent,
    AgTableComponent,
    NavBArComponent,
    MyCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
