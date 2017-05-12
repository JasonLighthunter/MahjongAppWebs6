import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { GameListComponent } from '../game-list/game-list.component';
import { GameCreateComponent } from '../game-setup/game-create.component';

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
  ]
})
export class GameModule { }
