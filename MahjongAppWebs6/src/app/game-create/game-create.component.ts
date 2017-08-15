import { Component, OnInit } from '@angular/core';

import { GameService } from '../services/game.service';
import { GameTemplateService } from '../services/gameTemplate.service';

import { GameTemplate } from '../models/gameTemplate';
import { PostGame } from '../models/postGame';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})

export class GameCreateComponent implements OnInit {
  gameTemplateList: GameTemplate[];

  currentTemplateName: string;
  public currentTemplate: GameTemplate;

  model: PostGame;

  submitted: boolean;
  isValid: boolean;

  ngOnInit() {
    this.getGameTemplates();
    this.isValid = false;
    this.resetGameCreationForm();
  }

  constructor(private gameService: GameService, private gameTemplateService: GameTemplateService) {}

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  createGame() {
    this.model.templateName = this.currentTemplateName;
    this.isValid = this.validateModel();
    if (this.isValid) {
      this.gameService
        .create(this.model)
        .subscribe(game => console.log(game));
      console.log('succes: ' + this.model);
    }
  }

  onChange() {
    for (let i = 0; i < this.gameTemplateList.length; i++) {
      if (this.gameTemplateList[i].id === this.currentTemplateName) {
        this.currentTemplate = this.gameTemplateList[i];
      }
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

  logTemplate() {
    console.log(this.currentTemplate);
  }

  getGameTemplates() {
    this.gameTemplateService.gameTemplates
    .subscribe(templates => {
      this.gameTemplateList = templates;
      console.log(this.gameTemplateList);
      if (this.gameTemplateList != null) {
        this.currentTemplate = this.gameTemplateList[0];
      }
    });
  }

  resetGameCreationForm() {
    this.submitted = false;
    this.model = new PostGame();
    // this.model.templateName = this.gameTemplateList[0].id;
    this.model.maxPlayers = 4;
    this.model.minPlayers = 2;
  }
}
