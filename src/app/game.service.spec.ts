import { inject, TestBed } from '@angular/core/testing';
import { COLORS_TOKEN } from './color/colors.token';
import { GameService } from './game.service';
import { RandomAccessIteratorService } from './random-access-iterator.service';

describe('GameService', () => {
  let service: GameService;
  let colors: Array<{ 0: string; 1: string }>;
  let randomAccessIteratorServiceMock: RandomAccessIteratorService;

  beforeEach(() => {
    colors = [['FFFFFF', 'White'], ['000000', 'Black'], ['FF0000', 'Red']];

    randomAccessIteratorServiceMock = {
      newIterator: elements => {
        return elements[Symbol.iterator]();
      }
    };

    TestBed.configureTestingModule({
      providers: [
        GameService,
        RandomAccessIteratorService,
        {
          provide: COLORS_TOKEN,
          useValue: colors
        }
      ]
    });

    TestBed.overrideProvider(RandomAccessIteratorService, {
      useValue: randomAccessIteratorServiceMock
    });
  });

  beforeEach(
    inject([GameService], (_service: GameService) => {
      service = _service;
    })
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returns a new game', () => {
    expect(service.newGame()).not.toBe(service.newGame());
  });
});
