import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Game } from '../models/game';

@Injectable()
export class GameService {
  private _url = 'http://mahjongmayhem.herokuapp.com/games';

  private gamesSub: BehaviorSubject<Game[]>;
  public games$: Observable<Game[]>;

  constructor(private http: Http) {
    this.gamesSub = new BehaviorSubject<Game[]>([]);
    this.games$ = this.gamesSub.asObservable();
    this.refresh();
  }

  public refresh() {
    return this.http.get(this._url)
      .subscribe(data => {
        const response: any = data.json();
        this.gamesSub.next(response);
    });

    // this.http.get(this._url)
    //   .map((response) => {
    //     this.gamesSub.next(response.json());
    //   }).toPromise();
  }
}
