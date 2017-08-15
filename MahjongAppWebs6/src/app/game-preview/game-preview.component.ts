import { Component, OnInit, Input } from '@angular/core';
import { GameTemplate } from '../models/gameTemplate';
@Component({
  selector: 'app-game-preview',
  templateUrl: './game-preview.component.html',
  styleUrls: ['./game-preview.component.scss']
})
export class GamePreviewComponent implements OnInit {
  @Input() currentTemplate: GameTemplate;

  constructor() { }

  ngOnInit() {
  }

}
