import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameService } from '../services/game.service';

import { GameListComponent } from '../game-list/game-list.component';
import { GameListOpenComponent } from '../game-list-open/game-list-open.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GameListComponent,
    GameListOpenComponent
  ], exports: [
    GameListComponent,
    GameListOpenComponent
  ],
  providers: [
    GameService
  ]
})

export class GameModule { }
