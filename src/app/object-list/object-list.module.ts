import {NgModule} from '@angular/core';
import {MyObjectList} from "./components/list/object-list.component";
import {MuObjectItemComponent} from "./components/item/object-item.component";
import {CommonModule} from "@angular/common";
import {MyObjectListRouting} from "./object-list-routing.module";


@NgModule({
  imports: [CommonModule, MyObjectListRouting],
  exports: [MyObjectList, MuObjectItemComponent],
  declarations: [MyObjectList, MuObjectItemComponent],
  providers: [],
})
export class MyObjectListModule {
}
