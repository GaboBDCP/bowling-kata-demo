import game from '../src/game';

test('It should return 0 for a full failed game', () => {
  const testGame = new game();

  for (let i = 0; i < 20; i++) {
    testGame.roll(0);
  }

  expect(testGame.score()).toBe(0);
});
