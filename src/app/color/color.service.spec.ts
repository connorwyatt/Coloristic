import { inject, TestBed } from '@angular/core/testing';
import { ColorService } from './color.service';
import { NTC_TOKEN } from './ntc.token';

describe('ColorService', () =>
{
  let nameThatColorMock: NameThatColor;

  beforeEach(() =>
  {
    nameThatColorMock = {
      init() {},
      name(color: string) { return ['', '']; },
      hsl(color: string) { return [0, 0, 0]; },
      rgb(color: string) { return [0, 0, 0]; },
      names: [
        ['#FFFFFF', 'White'],
        ['#000000', 'Black']
      ]
    };

    TestBed.configureTestingModule({
      providers: [
        ColorService,
        { provide: NTC_TOKEN, useValue: nameThatColorMock }
      ]
    });
  });

  describe('when created', () =>
  {
    let colorService: ColorService;

    beforeEach(inject([ColorService], (service: ColorService) =>
    {
      colorService = service;
    }));

    describe('when getting a random color', () =>
    {
      it('returns a color', () =>
      {
        expect(colorService.randomColor()).not.toBeFalsy();
      });

      it('returns a different color each time', () =>
      {
        expect(colorService.randomColor()).not.toEqual(colorService.randomColor());
      });
    });
  });
});
