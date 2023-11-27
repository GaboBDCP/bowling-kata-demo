export default class game {

  constructor() {
    this.runningScore = 0;
  }

  roll(pins) {
    this.runningScore += pins;
  }

  score() {
    return this.runningScore;
  }

  

  // constructor() {
  //   this.rolls = [];
  // }

  // roll(pins) {
  //   this.rolls.push(pins);
  // }

  // score() {
  //   let score = 0;
  //   let frameIndex = 0;
  //   for (let frame = 0; frame < 10; frame++) {
  //     if (this.isStrike(frameIndex)) {
  //       score += 10 + this.strikeBonus(frameIndex);
  //       frameIndex++;
  //     } else if (this.isSpare(frameIndex)) {
  //       score += 10 + this.spareBonus(frameIndex);
  //       frameIndex += 2;
  //     } else {
  //       score += this.sumOfBallsInFrame(frameIndex);
  //       frameIndex += 2;
  //     }
  //   }
  //   return score;
  // }

  // isStrike(frameIndex) {
  //   return this.rolls[frameIndex] === 10;
  // }

  // isSpare(frameIndex) {
  //   return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  // }

  // sumOfBallsInFrame(frameIndex) {
  //   return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  // }

  // spareBonus(frameIndex) {
  //   return this.rolls[frameIndex + 2];
  // }

  // strikeBonus(frameIndex) {
  //   return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  // }
  
}