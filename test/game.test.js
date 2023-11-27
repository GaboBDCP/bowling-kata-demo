// use named imports
import game from '../src/game';

let testGame;

beforeEach(() => {
  testGame = new game();

});

function rollMany(pins, rolls) {
  for (let i = 0; i < rolls; i++) {
    testGame.roll(pins);
  }
}

test('It should return 0 for a full failed game', () => {
  rollMany(0, 20);
  expect(testGame.score()).toBe(0);
});

test('It should return 20 for a game of all ones', () => {

  rollMany(1, 20);
  expect(testGame.score()).toBe(20);
});


test('It should return the correct score when a spare is rolled', () => {
  testGame.roll(5);
  testGame.roll(5); //spare
  testGame.roll(3);
  rollMany(0, 17);  
  expect(testGame.score()).toBe(16);
});