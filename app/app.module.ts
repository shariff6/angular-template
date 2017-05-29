/*This file will also be responsible for loading other components and parts of our app, as well as Angular specific dependencies such as the BrowserModule, which is used to let Angular communicate with the browser.*/
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }