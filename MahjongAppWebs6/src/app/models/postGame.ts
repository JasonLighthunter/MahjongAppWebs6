import { GameTemplate } from './gameTemplate';

export class PostGame {

  constructor(
    public gameTemplateId: string,
    public minPlayers:   number,
    public maxPlayers:   number
  ) {  }
}
