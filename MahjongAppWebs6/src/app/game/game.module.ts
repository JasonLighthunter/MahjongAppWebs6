import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameService } from '../services/game.service';
import { GameTemplateService } from '../services/gameTemplate.service';

import { FormsModule } from '@angular/forms';

import { GameListComponent } from '../game-list/game-list.component';
import { GameCreateComponent } from '../game-create/game-create.component';
import { GameListOpenComponent } from '../game-list-open/game-list-open.component';
import { GameBoardComponent } from '../game-board/game-board.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
    declarations: [
    GameListComponent,
    GameListOpenComponent,
    GameCreateComponent,
    GameBoardComponent
  ], exports: [
    GameListComponent,
    GameListOpenComponent,
    GameCreateComponent,
    GameBoardComponent
  ],
  providers: [
    GameService,
    GameTemplateService
  ]
})

export class GameModule { }
