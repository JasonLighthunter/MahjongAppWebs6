import { Component, OnInit } from '@angular/core';

import { GameService } from '../services/game.service';

import { Game } from '../models/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  gameList: Game[];
  numberOfGames: number;

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
}
