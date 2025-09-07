import {NgModule} from '@angular/core';
import {MyCalculatorComponent} from "./components/my-calculator/my-calculator.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [FormsModule, BrowserModule],
  exports: [MyCalculatorComponent],
  declarations: [MyCalculatorComponent],
  providers: [],
})
export class MyCalculatorModule {}


