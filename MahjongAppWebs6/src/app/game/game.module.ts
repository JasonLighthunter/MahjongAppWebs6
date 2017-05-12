import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameService } from '../services/game.service';

import { FormsModule } from '@angular/forms';
import { GameListComponent } from '../game-list/game-list.component';
import { GameCreateComponent } from '../game-create/game-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    GameListComponent,
    GameCreateComponent
  ], exports: [
    GameListComponent,
    GameCreateComponent
  ],
  providers: [
    GameService
  ]
})
export class GameModule { }
