import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyCalculatorComponent} from "./calculator/components/my-calculator/my-calculator.component";
import {MyEmptyRoute} from "./components/empty-route/empty-route.component";
import {MyObjectList} from "./object-list/components/list/object-list.component";

const routes: Routes = [
  {
    path: 'calculator',
    component: MyCalculatorComponent
  },
  {
    path: 'object-list',
    loadChildren: () => import('./object-list/object-list.module').then((m) => m.MyObjectListModule)
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
