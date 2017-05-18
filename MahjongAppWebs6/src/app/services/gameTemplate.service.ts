import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { GameTemplate } from '../models/gameTemplate';

@Injectable()
export class GameTemplateService {
  private _url = 'http://mahjongmayhem.herokuapp.com/gameTemplates';

  public gameTemplates: BehaviorSubject<GameTemplate[]>;

  constructor(private http: Http) {
    this.gameTemplates = new BehaviorSubject<GameTemplate[]>(null);
    this.refresh();
  }

  public refresh() {
    this.http.get(this._url)
    .map((response) => {
      this.gameTemplates.next(response.json());
    }).toPromise();
  }
}
