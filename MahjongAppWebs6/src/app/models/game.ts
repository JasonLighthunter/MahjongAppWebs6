import { User } from './user';

export class Game {
  _id:         string;
  id:          string;
  // gameTemplate
  createdOn:   string;
  startedOn?:  string;
  endedOn?:    string;
  createdBy:   User;
  minPlayers:  number;
  maxPlayers:  number;
  // players
  state:       string;
}
