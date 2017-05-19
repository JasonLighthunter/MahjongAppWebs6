import { Component, OnInit } from '@angular/core';

import { GameService } from '../services/game.service';

import { Game, GameStateEnum } from '../models/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  gameList: Game[];
  numberOfGames: number;
  nameOfGameStateOpen = GameStateEnum[GameStateEnum.open]

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
        this.numberOfGames = this.gameList.length;
      }
    });
  }

  joinGame(gameId) {
    var game = this.gameList.filter(game => game.id === gameId);
    if(game.length === 1){
      // console.log(this.gameList.filter(game => game.id === gameId)[0]);
      this.gameService.joinGame(gameId) .subscribe(
        game  => console.log(game),
        error =>  alert(error)
      );
    }
  }
}
