import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {myObject, MyObject, MyObjectList} from "../list/object-list.component";

@Component({
  selector: 'object-item',
  templateUrl: 'object-item.component.html',
  styleUrl: 'object-item.component.scss'
})


export class MuObjectItemComponent implements OnInit {

  public object?: MyObject; // undefined по умолчанию

  //ActivatedRoute - объект в котором хранится все что связано с текущим роутом
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.object = myObject[params['id'] - 1];
    })
  }
}
