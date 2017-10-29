import { Color } from './color/color';
import { HexCode } from './color/hex-code';
import { RandomAccessIteratorService } from './random-access-iterator.service';

export class Game {
  private colors: Iterator<Color>;

  public constructor(
    nameThatColor: NameThatColor,
    randomAccessIteratorService: RandomAccessIteratorService
  ) {
    const colors = nameThatColor.names.map(
      item => new Color(item[1], new HexCode(item[0]))
    );

    this.colors = randomAccessIteratorService.newIterator(colors, true);

    this._currentColor = this.colors.next().value;
  }

  private _currentColor: Color;

  public get currentColor() {
    return this._currentColor;
  }

  public guess(hex: HexCode): number {
    const score = hex.isEqual(this.currentColor.hex) ? 1000 : 0;

    this._currentColor = this.colors.next().value;

    return score;
  }
}
