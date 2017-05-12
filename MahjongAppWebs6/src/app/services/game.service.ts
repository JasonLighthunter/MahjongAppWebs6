import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Game } from '../models/game';

@Injectable()
export class GameService {
  private _url = 'http://mahjongmayhem.herokuapp.com/games';

  public games: BehaviorSubject<Game[]>;

  constructor(private http: Http) {
    this.games = new BehaviorSubject<Game[]>(null);
    this.refresh();
  }

  public refresh() {
    this.http.get(this._url)
      .map((response) => {
        this.games.next(response.json());
      }).toPromise();
  }
}
