import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { DemoMaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullTableComponent } from './full-table/full-table.component';
import { FilterTableComponent } from './filter-table/filter-table.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterTableComponent,
    FullTableComponent
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
   BrowserAnimationsModule,
   HttpClientModule,
   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
