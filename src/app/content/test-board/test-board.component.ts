import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-board',
  templateUrl: './test-board.component.html',
  styleUrls: ['./test-board.component.scss']
})
export class TestBoardComponent implements OnInit {

  droppedData: string;

  constructor() { }

  ngOnInit() {
  }

  // dragEnd(event) {
  //   console.log('Element was dragged', event);
  // }

  // onDrop({ dropData }: DropEvent<string>): void {
  //   this.droppedData = dropData;
  //   setTimeout(() => {
  //     this.droppedData = '';
  //   }, 2000);
  // }

}
