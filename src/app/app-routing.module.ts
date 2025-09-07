import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyCalculatorComponent} from "./calculator/components/my-calculator/my-calculator.component";
import {MyEmptyRoute} from "./components/empty-route/empty-route.component";

const routes: Routes = [
  {
    path: 'calculator',
    component: MyCalculatorComponent
  },
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: MyEmptyRoute
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
