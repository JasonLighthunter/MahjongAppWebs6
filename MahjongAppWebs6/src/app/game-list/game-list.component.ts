import { Component, OnInit } from '@angular/core';

import { Game } from '../models/game';

const GAMES: Game[] = [
{
  '_id': '5910cc460c6b76001171c548',
  'createdBy': {
    '_id': 'bjce.timmermans@student.avans.nl',
    'name': 'Brian Timmermans'
  },
  'createdOn': '2017-05-08T19:51:34.400Z',
  'gameTemplate': {
    '_id': 'Snake',
    'id':  'Snake'
  },
  'players': [
  {
    '_id': 'bjce.timmermans@student.avans.nl',
    'name': 'Brian Timmermans',
  },
  {
    '_id': 'wm.aarts@student.avans.nl',
    'name': 'Wouter Aarts',
  }
  ],
  'maxPlayers': 5,
  'minPlayers': 1,
  'state': 'open',
  'id': '5910cc460c6b76001171c548'
},
{
  '_id': '5910cb8e0c6b76001171c426',
  'createdBy': {
    '_id': 'bjce.timmermans@student.avans.nl',
    'name': 'Brian Timmermans'
  },
  'createdOn': '2017-05-08T19:48:30.583Z',
  'gameTemplate': {
    '_id': 'Snake',
    'id': 'Snake'
  },
  'players': [
  {
    '_id': 'bjce.timmermans@student.avans.nl',
    'name': 'Brian Timmermans'
  }
  ],
  'maxPlayers': 3,
  'minPlayers': 2,
  'state': 'open',
  'id': '5910cb8e0c6b76001171c426'
},
{
  '_id': '5910caeb0c6b76001171c395',
  'createdBy': {
    '_id': 'bjce.timmermans@student.avans.nl',
    'name': 'Brian Timmermans'
  },
  'createdOn': '2017-05-08T19:45:47.238Z',
  'gameTemplate': {
    '_id': 'Shanghai',
    'id': 'Shanghai'
  },
  'players': [
  {
    '_id': 'bjce.timmermans@student.avans.nl',
    'name': 'Brian Timmermans'
  }
  ],
  'maxPlayers': 32,
  'minPlayers': 2,
  'state': 'open',
  'id': '5910caeb0c6b76001171c395'
}
];

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  gameList = GAMES;

  constructor() { }

  ngOnInit() {
  }
}
