import { Component } from '@angular/core';
import * as Color from 'color';
import { Game } from '../../game';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent {
  public currentGame: Game;

  private gameService: GameService;

  public constructor(gameService: GameService) {
    this.gameService = gameService;

    this.newGame();
  }

  public submit($event: Event, hex: string) {
    $event.preventDefault();

    this.guess(hex);
  }

  public newGame() {
    this.currentGame = this.gameService.newGame();
  }

  private guess(hex: string) {
    console.log(this.currentGame.guess(new Color(hex)));
  }
}
