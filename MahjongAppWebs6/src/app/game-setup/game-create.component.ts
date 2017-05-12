import { Component } from '@angular/core';

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

export class GameCreateComponent {
  gameTemplateList = GAMETEMPLATES;

  model = new PostGame(this.gameTemplateList[0].id, 2, 2);

  submitted = false;

  isValid = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  createGame() {
    console.log(this.model);
    this.isValid = this.validateModel();
    if (this.isValid) {
      console.log('succes: ' + this.model);
    }
  }

  validateModel(): boolean{
    if (this.model.minPlayers < 1 || this.model.minPlayers > 32) {
      return false;
    }
    if (this.model.maxPlayers < 1 || this.model.maxPlayers > 32) {
      return false;
    }
    if (this.model.minPlayers > this.model.maxPlayers) {
      return false;
    }
    if (this.model.gameTemplateId === '') {
      return false;
    }
    return true;
  }

  resetGameCreationForm() {
    this.model = new PostGame(this.gameTemplateList[0].id, 2, 2);
  }
}
