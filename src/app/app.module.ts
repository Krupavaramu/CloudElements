import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ng2-tooltip-directive';


import { AppComponent } from './app.component';
import { AppService } from '../services/app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TooltipModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
