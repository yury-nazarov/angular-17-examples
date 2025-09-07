import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'object-list',
  templateUrl: 'object-list.component.html',
  styleUrl: 'object-list.component.scss'
})
export class MyObjectList {

  // В конструктор прокидываем сторонние сервисы которые можем использовать внутри компонента
  constructor(private router: Router, private route: ActivatedRoute,) {
  }

  public myObject = myObject;
  public redirectTo(id: number): void {
    console.log("click on " + id);
    this.router.navigate([`${id}`], {relativeTo: this.route })
  }
}


export const myObject: MyObject[] = [
  {
    title: 'first title',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    id: 1
  },
  {
    title: 'second title',
    content: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined",
    id: 2
  },
  {
    title: 'therd title',
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making",
    id: 3
  }
]

export interface MyObject {
  title: string;
  content: string;
  id: number;
}
