export class HexCode {
  private static hexCodeRegexes = {
    threeCharacters: /^#?([0-9A-F]{3})$/i,
    sixCharacters: /^#?([0-9A-F]{6})$/i
  };

  public readonly isValid: boolean;

  private value: string;

  constructor(hexCode: string) {
    try {
      this.value = HexCode.parseHexCode(hexCode);
      this.isValid = true;
    } catch (e) {
      if (e instanceof Error) {
        this.value = e.message;
        this.isValid = false;
      }
    }
  }

  private static parseHexCode(hexCode: string): string {
    debugger;

    if (!hexCode) {
      throw new Error('Invalid hex code.');
    }

    const regexes = HexCode.hexCodeRegexes;

    let hexCharacters: string;

    if (regexes.threeCharacters.test(hexCode)) {
      const threeCharacters = regexes.threeCharacters.exec(hexCode)[1];

      hexCharacters = threeCharacters
        .split('')
        .reduce((accumulatedHexCharacters, currentCharacter) => {
          return accumulatedHexCharacters + currentCharacter.repeat(2);
        }, '');
    } else if (regexes.sixCharacters.test(hexCode)) {
      hexCharacters = regexes.sixCharacters.exec(hexCode)[1];
    } else {
      throw new Error('Invalid hex code.');
    }

    return `#${hexCharacters}`;
  }

  public toString() {
    return this.value;
  }
}
