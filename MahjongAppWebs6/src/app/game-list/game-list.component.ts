import { Component, OnInit } from '@angular/core';

import { Game } from '../models/game';

const GAMES: Game[] = [
{
  '_id': '5903bdf9c240d4001158bf24',
  'createdOn': '2017-04-28T22:11:05.436Z',
  'createdBy': {
    '_id': 'wm.aarts@student.avans.nl',
    'name': 'Wouter Aarts',
    '__v': 0
  },
  'maxPlayers': 32,
  'minPlayers': 2,
  'state': 'open',
  'id': '5903bdf9c240d4001158bf24'
},
{
  '_id': '5903bdadc240d4001158be93',
  'createdBy': {
    '_id': 'wm.aarts@student.avans.nl',
    'name': 'Wouter Aarts',
    '__v': 0
  },
  'createdOn': '2017-04-28T22:09:49.193Z',
  'maxPlayers': 32,
  'minPlayers': 2,
  'state': 'open',
  'id': '5903bdadc240d4001158be93'
},
{
  '_id': '5903a160c66d5b0011fc2f5b',
  'createdOn': '2017-04-28T20:09:04.447Z',
  'createdBy': {
    '_id': 'wm.aarts@student.avans.nl',
    'name': 'Wouter Aarts',
    '__v': 0
  },
  'maxPlayers': 32,
  'minPlayers': 2,
  'state': 'open',
  'id': '5903a160c66d5b0011fc2f5b'
},
{
  '_id': '59039b8cc66d5b0011fc2eca',
  'createdOn': '2017-04-28T19:44:12.436Z',
  'createdBy': {
    '_id': 'wm.aarts@student.avans.nl',
    'name': 'Wouter Aarts',
    '__v': 0
  },
  'maxPlayers': 32,
  'minPlayers': 2,
  'state': 'open',
  'id': '59039b8cc66d5b0011fc2eca'
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
