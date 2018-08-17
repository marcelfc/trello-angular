import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { ListsComponent } from './lists/lists.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BoardComponent, ListsComponent, CardComponent],
  exports: [BoardComponent]
})
export class ContentModule { }
