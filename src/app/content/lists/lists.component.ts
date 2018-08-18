import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ListsService } from './lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  @ViewChild("boxToDo", {read: ElementRef}) boxToDo: ElementRef;
  @ViewChild("boxDoing", {read: ElementRef}) boxDoing: ElementRef;
  @ViewChild("boxDone", {read: ElementRef}) boxDone: ElementRef;
  
  toDoitems = [
    {
      title: 'Teste 1',
      target: 'todo'
    }
  ];
  doingitems = [];
  doneitems = [];

  constructor(private listsService: ListsService) { }

  ngOnInit() {
  }

  onItemDropToDo(e: any) {
    let _dragData = e.dragData;
    if(e.dragData.target == 'done'){
      this.doneitems = this.listsService.transformList(this.doneitems, _dragData);
    }

    if(e.dragData.target == 'doing'){
      this.doingitems = this.listsService.transformList(this.doingitems, _dragData);
    }

    _dragData.target = 'todo';

    this.toDoitems.push(_dragData);
  }

  onItemDropDoing(e: any) {
    let _dragData = e.dragData;
    if(e.dragData.target == 'todo'){
      this.toDoitems = this.listsService.transformList(this.toDoitems, _dragData);
    }

    if(e.dragData.target == 'done'){
      this.doneitems = this.listsService.transformList(this.doneitems, _dragData);
    }

    _dragData.target = 'doing';

    this.doingitems.push(_dragData);
  }

  onItemDropDone(e: any) {
    let _dragData = e.dragData;
    if(e.dragData.target == 'todo'){
      this.toDoitems = this.listsService.transformList(this.toDoitems, _dragData);
    }

    if(e.dragData.target == 'doing'){
      this.doingitems = this.listsService.transformList(this.doingitems, _dragData);
    }

    _dragData.target = 'done';

    this.doneitems.push(_dragData);
  }

  onEnterToDo(text) {
    const _data = {
      title: text,
      target: 'todo'
    };

    this.toDoitems.push(_data);

    this.boxToDo.nativeElement.value = null;
  }

  onEnterDoing(text) {
    const _data = {
      title: text,
      target: 'doing'
    };

    this.doingitems.push(_data);

    this.boxDoing.nativeElement.value = null;
  }

  onEnterDone(text) {
    const _data = {
      title: text,
      target: 'done'
    };

    this.doneitems.push(_data);

    this.boxDone.nativeElement.value = null;
  }

}
