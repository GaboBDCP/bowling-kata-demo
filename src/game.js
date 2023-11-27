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

  
  
}