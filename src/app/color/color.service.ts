import { Inject, Injectable } from '@angular/core';
import { RandomAccessIterator } from '../randomisation/randomAccessIterator';
import { Color } from './color';
import { NTC_TOKEN } from './ntc.token';

@Injectable()
export class ColorService
{

  private colors: Generator;

  public constructor(@Inject(NTC_TOKEN) nameThatColor: NameThatColor)
  {
    const colors = nameThatColor.names
      .map(item =>
      {
        return {
          name: item[1],
          hex: item[0]
        };
      });

    this.colors = RandomAccessIterator(colors);
  }

  public randomColor(): Color
  {
    return this.colors.next().value;
  }

}
