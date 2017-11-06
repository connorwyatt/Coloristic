import * as Color from 'color';
import { NamedColor } from './color/named-color';
import { Game } from './game';
import { RandomAccessIteratorService } from './random-access-iterator.service';

describe('Game', () => {
  let game: Game;
  let colors: Array<{ 0: string; 1: string }>;
  let randomAccessIteratorServiceMock: RandomAccessIteratorService;

  beforeEach(() => {
    colors = [['FFFFFF', 'White'], ['000000', 'Black'], ['FF0000', 'Red']];

    randomAccessIteratorServiceMock = {
      newIterator: elements => {
        return elements[Symbol.iterator]();
      }
    };

    game = new Game(colors, randomAccessIteratorServiceMock);
  });

  it('returns the current color', () => {
    expect(game.currentColor).toEqual(
      new NamedColor('White', new Color('#FFFFFF'))
    );
  });

  describe('when a guess is made', () => {
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

    it('updates the score', () => {
      expect(game.score).toBe(0);
      game.guess(new Color('#FFFFFF'));
      expect(game.score).toBe(1000);
      game.guess(new Color('#000000'));
      expect(game.score).toBe(2000);
    });

    describe('when the guess is exactly correct', () => {
      it('returns a score of 1000', () => {
        expect(game.guess(new Color('#FFFFFF'))).toBe(1000);
      });
    });

    describe('when the guess is exactly incorrect', () => {
      it('returns the score of 0', () => {
        expect(game.guess(new Color('#000000'))).toBe(0);
      });
    });

    describe('when the guess is outside of the threshold', () => {
      it('returns the score of 0', () => {
        expect(game.guess(new Color('#CCCCCB'))).toBe(0);
      });
    });

    describe('when the guess is inside of the threshold', () => {
      it('returns the score of 1', () => {
        expect(game.guess(new Color('#CCCCCC'))).toBe(1);
      });
    });

    describe('when the guess is close to the actual color', () => {
      it('should return a score of 999', () => {
        expect(game.guess(new Color('#FFFFFE'))).toBe(999);
      });
    });
  });
});
