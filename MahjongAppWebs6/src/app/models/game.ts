import { CreatedByTimeStamp } from './createdByTimeStamp';

export class Game {
  _id:         string;
  id:          string;
  // gameTemplate
  createdOn:   string;
  startedOn?:  string;
  endedOn?:    string;
  createdBy:   CreatedByTimeStamp;
  minPlayers:  number;
  maxPlayers:  number;
  // players
  state:       string;
}
