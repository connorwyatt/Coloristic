import { HexCode } from './hex-code';

export class Color {
  public readonly name: string;
  public readonly hex: HexCode;

  constructor(name: string, hex: HexCode) {
    this.name = name;
    this.hex = hex;
  }
}
