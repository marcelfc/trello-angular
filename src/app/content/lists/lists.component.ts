import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onDragStart(): void {
    console.log('start');
  }

  onDragMove(): void {
    console.log('move');
  }

  onDragEnd(): void {
    console.log('end');
  }

}
