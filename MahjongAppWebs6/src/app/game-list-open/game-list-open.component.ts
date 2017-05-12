import { Component, OnInit } from '@angular/core';

import { GameService } from '../services/game.service';

import { Game, GameStateEnum } from '../models/game';

@Component({
  selector: 'app-game-list-open',
  templateUrl: './game-list-open.component.html',
  styleUrls: ['./game-list-open.component.scss']
})
export class GameListOpenComponent implements OnInit {
  gameList: Game[];
  numberOfGames: number;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gameService.games$
      .subscribe(
        games => {
          const nameOfGameStateOpen = GameStateEnum[GameStateEnum.open];
          this.gameList = games.filter(game => game.state === nameOfGameStateOpen);

          this.numberOfGames = this.gameList === null ? 0 : this.gameList.length;
        }
      );
  }
}
