import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { PlaceComponent } from './place/place.component';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent,
    LogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
