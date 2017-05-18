import { Component, OnInit } from '@angular/core';

import { GameService } from '../services/game.service';

import { GameTemplate } from '../models/gameTemplate';
import { PostGame } from '../models/postGame';

const GAMETEMPLATES: GameTemplate[] = [
  {
    '_id': 'Shanghai',
    'id': 'Shanghai',
    'tiles': [
      {
        'xPos': 0,
        'yPos': 0,
        'zPos': 0
      }
    ]
  },
  {
    '_id': 'Dragon',
    'id': 'Dragon',
    'tiles': [
      {
        'xPos': 0,
        'yPos': 0,
        'zPos': 0
      }
    ]
  }
];

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})

export class GameCreateComponent implements OnInit {
  gameTemplateList: GameTemplate[];

  model: PostGame;

  submitted: boolean;
  isValid: boolean;

  ngOnInit() {
    this.gameTemplateList = GAMETEMPLATES;
    this.isValid = false;
    this.resetGameCreationForm();
  }

  constructor(private gameService: GameService) {}

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  createGame() {
    // console.log(this.model);
    this.isValid = this.validateModel();
    if (this.isValid) {
      this.gameService
        .create(this.model)
        .subscribe(game => console.log(game));
      console.log('succes: ' + this.model);
    }
  }

  validateModel(): boolean {
    if (this.model.minPlayers < 1 || this.model.minPlayers > 32) {
      return false;
    }
    if (this.model.maxPlayers < 1 || this.model.maxPlayers > 32) {
      return false;
    }
    if (this.model.minPlayers > this.model.maxPlayers) {
      return false;
    }
    if (this.model.templateName === '') {
      return false;
    }
    return true;
  }

  resetGameCreationForm() {
    this.submitted = false;
    this.model = new PostGame();
    this.model.templateName = this.gameTemplateList[0].id;
    this.model.maxPlayers = 4;
    this.model.minPlayers = 2;
  }
}
