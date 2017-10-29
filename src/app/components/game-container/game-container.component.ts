import { Component } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent {
  private gameService: GameService;

  public constructor(gameService: GameService) {
    this.gameService = gameService;
  }
}
