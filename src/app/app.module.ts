import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgTableComponent } from './components/ag-table/ag-table.component';
import { NavBArComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AgTableComponent,
    NavBArComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
