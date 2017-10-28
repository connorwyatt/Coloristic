import { TestBed, inject } from '@angular/core/testing';

import { GameService } from './game.service';
import { ColorService } from './color/color.service';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorService, GameService]
    });

    TestBed.overrideProvider(ColorService, {
      useValue: {}
    });
  });

  it(
    'should be created',
    inject([GameService], (service: GameService) => {
      expect(service).toBeTruthy();
    })
  );
});
