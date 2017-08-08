import { Component, Input } from '@angular/core';

import { GameTemplateService } from '../services/gameTemplate.service';
import { GameService } from '../services/game.service';

import { GameTemplate } from '../models/gameTemplate';
import { Game } from '../models/game';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})

export class GameBoardComponent{
  currentGame : Game;
  currentTemplate : GameTemplate;

  constructor(private gameService: GameService, private gameTemplateService: GameTemplateService) {}

  @Input()
  set gameId(gameId: string){
    this.getGame(gameId);
  }
  get gameId(){
    return this.currentGame._id;
  }

  getGame(gameId: string) {
    this.gameService.getGame(gameId);
    this.gameService.game
      .subscribe(game => {
        this.currentGame = game;
        console.log(gameId);
        // if (this.game === null) {
        //   this.numberOfGames = 0;
        // } else {
        //   this.numberOfGames = this.gameList.length;
        // }
        },
        error => alert(error));
  }

}
