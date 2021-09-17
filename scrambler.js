class Scrambler {
  constructor(letters, reflector = false) {
    this.disc = [];
    letters.split('').forEach((v,i,a) => {
      this.disc.push([alphabet[i], v])
    })
    this.start = letters[0];
    this.reflector = reflector;
  }

  key(letter) {
    letter = this.disc.findIndex( v => v[1] == letter );
    this.click( letter );
  }

  click(clicks = 1) {
    for (let i = 0; i < clicks; i++)
      this.disc.push(this.disc.shift());
  }

  passthrough(letter) {
    if (this.disc.length < 26)
      return letter;
    return this.translate(letter);
  }

  passthroughReverse(letter) {
    if (this.disc.length < 26)
      return letter;
    return this.translateReverse(letter);
  }

  translate(letter) {
    let idx = alphabet.indexOf(letter);
    if (this.disc[idx] == undefined)
      return letter;
    idx = this.disc[idx][0];
    idx = this.disc.findIndex(e => e[1] == idx)
    return alphabet[idx];
  }

  translateReverse(letter) {
    let idx = alphabet.indexOf(letter);
    idx = this.disc[idx][1];
    idx = this.disc.findIndex((v) => v[0] == idx);
    return alphabet[idx];
  }
}
