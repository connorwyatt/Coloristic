import { HexCode } from './hex-code';

describe('HexCode', () => {
  it('is valid for strings in a correct format', () => {
    expect(new HexCode('#FF00FF').isValid).toBe(true);
    expect(new HexCode('#ff00ff').isValid).toBe(true);
    expect(new HexCode('FF00FF').isValid).toBe(true);
    expect(new HexCode('ff00ff').isValid).toBe(true);
    expect(new HexCode('#FFF').isValid).toBe(true);
    expect(new HexCode('#fff').isValid).toBe(true);
    expect(new HexCode('FFF').isValid).toBe(true);
    expect(new HexCode('fff').isValid).toBe(true);
  });

  it('is invalid for strings in an incorrect format', () => {
    expect(new HexCode('').isValid).toBe(false);
    expect(new HexCode('FF00F').isValid).toBe(false);
    expect(new HexCode('FF').isValid).toBe(false);
    expect(new HexCode('#SSSSSS').isValid).toBe(false);
    expect(new HexCode('SSSSSS').isValid).toBe(false);
  });

  describe('when the HexCode is valid', () => {
    let hexCode: HexCode;

    beforeEach(() => {
      hexCode = new HexCode('FF00FF');
    });

    it('returns a string representation', () => {
      expect(hexCode.isValid).toBe(true);
      expect(hexCode.toString()).toEqual('#FF00FF');
    });
  });

  describe('when the passed string is invalid', () => {
    let hexCode: HexCode;

    beforeEach(() => {
      hexCode = new HexCode('');
    });

    it('returns a string representation', () => {
      expect(hexCode.isValid).toBe(false);
      expect(hexCode.toString()).toEqual('Invalid hex code.');
    });
  });
});
