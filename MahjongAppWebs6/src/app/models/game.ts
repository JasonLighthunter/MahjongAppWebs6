import { User } from './user';
import { GameTemplate } from './gameTemplate';

export class Game {
  _id:          string;
  id:           string;
  gameTemplate: GameTemplate;
  createdOn:    string;
  startedOn?:   string;
  endedOn?:     string;
  createdBy:    User;
  minPlayers:   number;
  maxPlayers:   number;
  players:      [User];
  state:        string;
}

export enum GameStateEnum {
  finished,
  open,
  playing
}
