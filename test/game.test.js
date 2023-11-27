// use named imports
import game from '../src/game';

//beforeAll(() => {

// });
// afterAll(() => {

// });

test('It should return 0 for a full failed game', () => {
  const testGame = new game();

  for (let i = 0; i < 20; i++) {
    testGame.roll(0);
  }

  expect(testGame.score()).toBe(0);
});

test('It should return 20 for a game of all ones', () => {
  const testGame = new game();

  for (let i = 0; i < 20; i++) {
    testGame.roll(1);
  }

  expect(testGame.score()).toBe(20);
});