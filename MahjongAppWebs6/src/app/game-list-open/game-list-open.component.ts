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
  nameOfGameStateOpen = GameStateEnum[GameStateEnum.open];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gameService.games
    .subscribe(games => {
      this.gameList = games;
      if (this.gameList === null) {
        this.numberOfGames = 0;
      } else {
        const openGames = games.filter(game => game.state === this.nameOfGameStateOpen);
        const openGamesNotFull = openGames.filter(game => game.players.length < game.maxPlayers);
        this.gameList = openGamesNotFull;
        this.numberOfGames = this.gameList.length;
      }
    });
  }

  joinGame(gameId) {
    const games = this.gameList.filter(game => game.id === gameId);
    if (games.length === 1) {
      this.gameService.joinGame(gameId) .subscribe(
        game  => console.log(game),
        error =>  alert(error)
      );
    }
  }
}
