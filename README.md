# Jest unit tests for Bowling Game Kata

This folder contains a unit test template for [Jest](https://facebook.github.io/jest).

Configured to support ES6 syntax using Babel (preset `es2015`)

## Installation

```bash
npm install
```

## Running the tests

```bash
npm test
```

Or you can use built-in watch mode:

```bash
npm run test:watch
```

## Show coverage

```bash
npm run test:cover
```

Note: coverage is also included in watch mode.

## Bowling Kata

### Rules

- Each game, or “line” of bowling, includes ten turns, or “frames” for the bowler.
- In each frame, the bowler gets up to two tries to knock down all the pins.
- If in two tries, he fails to knock them all down, his score for that frame is the total number of pins knocked down in    his two tries.
- If in two tries he knocks them all down, this is called a “spare” and his score for the frame is ten plus the number of pins knocked down on his next throw (in his next turn).
- If on his first try in the frame he knocks down all the pins, this is called a “strike”. His turn is over, and his score for the frame is ten plus the simple total of the pins knocked down in his next two rolls.
- If he gets a spare or strike in the last (tenth) frame, the bowler gets to throw one or two more bonus balls, respectively. These bonus throws are taken as part of the same turn. If the bonus throws knock down all the pins, the process does not repeat: the bonus throws are only used to calculate the score of the final frame.
- The game score is the total of all frame scores.


### Implementation

- A class called `Game` is exported from `game.js`
- The class has two methods:
  - `roll(pins)` which is called each time the player rolls a ball. The argument is the number of pins knocked down.
  - `score()` which is called only at the very end of the game. It returns the total score for that game.


### Scoring example

- Frame 1, ball 1: 10 pins (strike)
- Frame 2, ball 1: 3 pins
- Frame 2, ball 2: 6 pins
- The total score from these throws is:
  - Frame one: 10 + (3 + 6) = 19
  - Frame two: 3 + 6 = 9
- TOTAL = 28

### Suggested Test Cases

(When scoring “X” indicates a strike, “/” indicates a spare, “-” indicates a miss)

- 0 0 0 0 0 0 0 0 0 0 0 0 (12 rolls: 0 pins) = 10 frames * 0 points = 0
- X X X X X X X X X X X X (12 rolls: 12 strikes) = 10 frames * 30 points = 300
- 9- 9- 9- 9- 9- 9- 9- 9- 9- 9- (20 rolls: 10 pairs of 9 and miss) = 10 frames * 9 points = 90
- 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5 (21 rolls: 10 pairs of 5 and spare, with a final 5) = 10 frames * 15 points = 150


### More info on the rules at:
- https://www.topendsports.com/sport/tenpin/scoring.htm

### More info on the kata at:
- https://codingdojo.org/kata/Bowling/


