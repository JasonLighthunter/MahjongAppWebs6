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

          const openGames = games.filter(game => game.state === nameOfGameStateOpen);
          const openGamesNotFull = openGames.filter(game => game.players.length < game.maxPlayers);
          this.gameList = openGamesNotFull;

          this.numberOfGames = this.gameList === null ? 0 : this.gameList.length;
        }
      );
  }
}
