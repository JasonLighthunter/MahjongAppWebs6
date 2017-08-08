import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MahjongJobSteven';
  selectedGameId: string;

  onGameSelected(gameId: string) {
    this.selectedGameId = gameId;
  }
}
