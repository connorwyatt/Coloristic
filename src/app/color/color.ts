import { HexCode } from './hex-code';

export class Color {
  public readonly name: string;
  public readonly hex: HexCode;

  constructor(name: string, hex: string) {
    this.name = name;
    this.hex = new HexCode(hex);
  }
}
