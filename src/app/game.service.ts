import { Inject, Injectable } from '@angular/core';
import { NTC_TOKEN } from './color/ntc.token';
import { Game } from './game';
import { RandomAccessIteratorService } from './random-access-iterator.service';

@Injectable()
export class GameService {
  private nameThatColor: NameThatColor;
  private randomAccessIteratorService: RandomAccessIteratorService;

  public constructor(
    @Inject(NTC_TOKEN) nameThatColor: NameThatColor,
    randomAccessIteratorService: RandomAccessIteratorService
  ) {
    this.nameThatColor = nameThatColor;
    this.randomAccessIteratorService = randomAccessIteratorService;
  }

  public newGame(): Game {
    return new Game(this.nameThatColor, this.randomAccessIteratorService);
  }
}
