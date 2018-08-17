import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { ListsComponent } from './lists/lists.component';
import { CardComponent } from './card/card.component';
import { TestBoardComponent } from './test-board/test-board.component';
import { DraggableModule } from '../draggable/draggable.module';

@NgModule({
  imports: [
    CommonModule,
    DraggableModule
  ],
  declarations: [BoardComponent, ListsComponent, CardComponent, TestBoardComponent],
  exports: [BoardComponent],
  providers: []
})
export class ContentModule { }
