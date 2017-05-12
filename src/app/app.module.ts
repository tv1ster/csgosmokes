import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { InteractiveMapComponent } from './interactive-map/interactive-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    InteractiveMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppModule { }
