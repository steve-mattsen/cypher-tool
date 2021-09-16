class Scrambler {
  constructor(letters) {
    this.disc = [];
    letters.split('').forEach((v,i,a) => {
      this.disc.push([alphabet[i], v])
    })
    this.start = letters[0];
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
    this.click();
    return this.translate(letter);
  }

  translate(letter) {
    let idx = alphabet.indexOf(letter);
    idx = this.disc[idx][0];
    idx = this.disc.findIndex(e => e[1] == idx)
    return alphabet[idx];
  }
}
