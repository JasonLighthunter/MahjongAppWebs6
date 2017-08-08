import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/rx';
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
    'x-token': OAUTH_TOKEN,
    'Content-Type': 'application/json'
  });

  public games: BehaviorSubject<Game[]>;
  public game: BehaviorSubject<Game>;

  constructor(private http: Http) {
    this.games = new BehaviorSubject<Game[]>(null);
    this.game = new BehaviorSubject<Game>(null);
    this.refresh();
  }

  public refresh() {
    this.http.get(this._url)
    .map((response) => {
      this.games.next(response.json());
    }).toPromise();
  }

  public create(postGame) {
    return this.http
    .post(this._url, JSON.stringify(postGame), { headers: this._postHeaders })
    .map(res =>  {
      const newGame: Game = res.json();
      const currentGames: Game[] = this.games.getValue();
      currentGames.push(newGame);
      this.games.next(currentGames);
      return newGame;
    });
  }

  joinGame(gameId) {
    return this.http
      .post(this._url +'/'+gameId+'/players', null, { headers: this._postHeaders })
      .map(this.extractData)
      .catch(this.handleError);
  }

  startGame(gameId){
    return this.http
      .post(this._url + '/' + gameId + '/start', null, { headers:this._postHeaders })
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      errMsg = body.message || JSON.stringify(body);
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

  public getGame(gameId: string){//
    this.http.get(this._url + "/" + gameId)
      .map((response) => {
        this.game.next(response.json());
      }).toPromise()
      .catch(this.handleError);
  }

}
