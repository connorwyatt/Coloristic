import * as Color from 'color';
import { NamedColor } from './color/named-color';
import { RandomAccessIteratorService } from './random-access-iterator.service';

export class Game {
  private colors: Iterator<NamedColor>;

  public constructor(
    nameThatColor: NameThatColor,
    randomAccessIteratorService: RandomAccessIteratorService
  ) {
    const colors = nameThatColor.names.map(
      item => new NamedColor(item[1], new Color(`#${item[0]}`))
    );

    this.colors = randomAccessIteratorService.newIterator(colors, true);

    this._currentColor = this.colors.next().value;
  }

  private _currentColor: NamedColor;

  public get currentColor(): NamedColor {
    return this._currentColor;
  }

  public guess(color: Color): number {
    debugger;

    const score = this.pointsScored(this.currentColor.color, color);

    this._currentColor = this.colors.next().value;

    return score;
  }

  private pointsScored(actualColor: Color, guessedColor: Color): number {
    const contrast = actualColor.contrast(guessedColor);

    const normalisedContrast = (21 - contrast) / 20;

    const threshold = 0.96968;

    const thresholdedContrast = Math.max(
      (normalisedContrast - threshold) * (1 / (1 - threshold)),
      0
    );

    const score = Math.round(thresholdedContrast * 1000);

    return score;
  }
}
