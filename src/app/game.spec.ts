import { Color } from './color/color';
import { Game } from './game';
import { HexCode } from './color/hex-code';
import { RandomAccessIteratorService } from './random-access-iterator.service';

describe('Game', () => {
  let game: Game;
  let nameThatColorMock: NameThatColor;
  let randomAccessIteratorServiceMock: RandomAccessIteratorService;

  beforeEach(() => {
    nameThatColorMock = {
      names: [['FFFFFF', 'White'], ['000000', 'Black'], ['FF0000', 'Red']],
      init() {},
      name(color: string) {
        return null;
      },
      hsl(color: string) {
        return null;
      },
      rgb(color: string) {
        return null;
      }
    };

    randomAccessIteratorServiceMock = {
      newIterator: elements => {
        return elements[Symbol.iterator]();
      }
    };

    game = new Game(nameThatColorMock, randomAccessIteratorServiceMock);
  });

  it('returns the current color', () => {
    expect(game.currentColor).toEqual(
      new Color('White', new HexCode('#FFFFFF'))
    );
  });

  describe('when a guess is made', () => {
    describe('when the guess is correct', () => {
      it('gives a score of 1000', () => {
        expect(game.guess(new HexCode('#FFFFFF'))).toBe(1000);
      });

      it('moves on to the next color', () => {
        game.guess(new HexCode('#FFFFFF'));
        expect(game.currentColor).toEqual(
          new Color('Black', new HexCode('#000000'))
        );
        game.guess(new HexCode('#FFFFFF'));
        expect(game.currentColor).toEqual(
          new Color('Red', new HexCode('#FF0000'))
        );
      });
    });

    describe('when the guess is incorrect', () => {
      it('gives a score of 0', () => {
        expect(game.guess(new HexCode('#000000'))).toBe(0);
      });

      it('moves on to the next color', () => {
        game.guess(new HexCode('#000000'));
        expect(game.currentColor).toEqual(
          new Color('Black', new HexCode('#000000'))
        );
        game.guess(new HexCode('#000000'));
        expect(game.currentColor).toEqual(
          new Color('Red', new HexCode('#FF0000'))
        );
      });
    });
  });
});
