import * as Color from 'color';
import { NamedColor } from './color/named-color';
import { Game } from './game';
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
      new NamedColor('White', new Color('#FFFFFF'))
    );
  });

  describe('when a guess is made', () => {
    describe('when the guess is correct', () => {
      it('gives a score of 1000', () => {
        expect(game.guess(new Color('#FFFFFF'))).toBe(1000);
      });

      it('moves on to the next color', () => {
        game.guess(new Color('#FFFFFF'));
        expect(game.currentColor).toEqual(
          new NamedColor('Black', new Color('#000000'))
        );
        game.guess(new Color('#FFFFFF'));
        expect(game.currentColor).toEqual(
          new NamedColor('Red', new Color('#FF0000'))
        );
      });
    });

    describe('when the guess is incorrect', () => {
      it('gives a score of 0', () => {
        expect(game.guess(new Color('#000000'))).toBe(0);
      });

      it('moves on to the next color', () => {
        game.guess(new Color('#000000'));
        expect(game.currentColor).toEqual(
          new NamedColor('Black', new Color('#000000'))
        );
        game.guess(new Color('#000000'));
        expect(game.currentColor).toEqual(
          new NamedColor('Red', new Color('#FF0000'))
        );
      });
    });
  });
});
