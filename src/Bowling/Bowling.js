class Bowling {

  constructor() {
    this.frames = [];
  }

  score(frames) {
    this.frames = frames;
    let sum = 0;

    for (let i = 0; i < this.frames.length; i += 2) {
      if (!this.notLastFrame(i)) {
        sum += this.frames[i] + this.frames[i + 1] + this.frames[i + 2];
        return sum;
      }

      if (this.isStrike(i) && this.notLastFrame(i)) {
        sum += this.strike(i);
      } else if (this.isSpare(i) && this.notLastFrame(i)) {
        sum += this.spare(i);
      } else {
        sum += this.frames[i] + this.frames[i + 1];
      }
    }

    return sum;
  }

  notLastFrame(i) {
    return i < this.frames.length - 3;
  }

  isStrike(i) {
    return this.frames[i] === 10;
  }

  isSpare(i) {
    return this.frames[i] + this.frames[i + 1] === 10 &&
      this.frames[i] !== 10 &&
      this.frames[i + 1] !== 10;
  }

  strike(i) {
    let score = 0;
    score = score + this.frames[i] + (this.frames[i + 2] || 0) + (this.frames[i + 3] || 0);

    if (this.frames[i + 2] === 10 && i !== this.frames.length - 5) { // not frame 9
      score += this.frames[i + 4] || 0;
    }

    return score;
  }

  spare(i) {
    return 10 + this.frames[i + 2];
  }
}

export default Bowling;
