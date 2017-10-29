import * as Color from 'color';

export class NamedColor {
  public readonly name: string;
  public readonly color: Color;

  public constructor(name: string, color: Color) {
    this.name = name;
    this.color = color;
  }
}
