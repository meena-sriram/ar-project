import {BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import {NgModule} from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {WebcamModule} from 'ngx-webcam';
import {HomeComponent} from './home/home.component';
import { EntryComponent } from './entry/entry.component';
import { ArComponent } from './ar/ar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryComponent,
    ArComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
