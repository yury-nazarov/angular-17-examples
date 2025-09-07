import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MyCalculatorModule} from "./calculator/my-calculator.module";
import {MyNavigation} from "./components/navigation/navigation.component";
import {MyEmptyRoute} from "./components/empty-route/empty-route.component";

@NgModule({
  declarations: [
    AppComponent,
    MyNavigation,
    MyEmptyRoute
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MyCalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
