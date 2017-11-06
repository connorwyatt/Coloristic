import { Inject, Injectable } from '@angular/core';
import { Game } from './game';
import { RandomAccessIteratorService } from './random-access-iterator.service';
import { COLORS_TOKEN } from './color/colors.token';

@Injectable()
export class GameService {
  private colors: Array<{ 0: string; 1: string }>;
  private randomAccessIteratorService: RandomAccessIteratorService;

  public constructor(
    @Inject(COLORS_TOKEN) colors: Array<{ 0: string; 1: string }>,
    randomAccessIteratorService: RandomAccessIteratorService
  ) {
    this.colors = colors;
    this.randomAccessIteratorService = randomAccessIteratorService;
  }

  public newGame(): Game {
    return new Game(this.colors, this.randomAccessIteratorService);
  }
}
