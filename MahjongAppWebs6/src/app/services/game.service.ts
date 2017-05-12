import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Game } from '../models/game';

import { OAUTH_TOKEN, USERNAME } from '../app.config';

@Injectable()
export class GameService {
  private _url = 'http://mahjongmayhem.herokuapp.com/games';

  private _postHeaders = new Headers({
    'x-username': USERNAME,
    'x-token': OAUTH_TOKEN
  });

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

  // public CreateGame(postGame) {
  //   return this.http
  //     .post(this._url, JSON.stringify(postGame), {headers: this._postHeaders})
  //     .toPromise()
  //     .then(res => res.json().data as Game)
  //     .catch(this.handleError);
  // }
}
