import { inject, TestBed } from '@angular/core/testing';
import { NTC_TOKEN } from './color/ntc.token';
import { GameService } from './game.service';
import { RandomAccessIteratorService } from './random-access-iterator.service';

describe('GameService', () => {
  let service: GameService;
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

    TestBed.configureTestingModule({
      providers: [
        GameService,
        RandomAccessIteratorService,
        {
          provide: NTC_TOKEN,
          useValue: nameThatColorMock
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
