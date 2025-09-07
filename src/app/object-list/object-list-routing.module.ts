import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyObjectList} from "./components/list/object-list.component";
import {MuObjectItemComponent} from "./components/item/object-item.component";


const routes: Routes = [
  {
    path: '',
    component: MyObjectList
  },
  {
    path: ':id',
    component: MuObjectItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MyObjectListRouting { }
