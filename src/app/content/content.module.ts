import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { ListsComponent } from './lists/lists.component';
import { CardComponent } from './card/card.component';
import { NgDragDropModule } from 'ng-drag-drop';

@NgModule({
  imports: [
    CommonModule,
    NgDragDropModule.forRoot()
  ],
  declarations: [BoardComponent, ListsComponent, CardComponent],
  exports: [BoardComponent],
  providers: []
})
export class ContentModule { }
