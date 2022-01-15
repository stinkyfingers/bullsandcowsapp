import { CheckAnswer, red, blue, green, yellow, orange, purple } from './game';

describe('CheckAnswer', () => {
  const tests = [
    {
      name: 'win',
      answer: {'1': red, '2': green, '3': blue, '4': red},
      game: {'1': red, '2': green, '3': blue, '4': red},
      expected: { bulls: 4, cows: 0 },
    },
    {
      name: '2 bulls, 1 cow',
      answer: {'1': red, '2': green, '3': blue, '4': blue},
      game: {'1': red, '2': blue, '3': blue, '4': yellow},
      expected: { bulls: 2, cows: 1 },
    },
    {
      name: 'no matches',
      answer: {'1': red, '2': green, '3': blue, '4': blue},
      game: {'1': purple, '2': yellow, '3': purple, '4': yellow},
      expected: { bulls: 0, cows: 0 },
    },
    {
      name: 'all cows',
      answer: {'1': blue, '2': red, '3': yellow, '4': blue},
      game: {'1': red, '2': blue, '3': blue, '4': yellow},
      expected: { bulls: 0, cows: 4 },
    },
    {
      name: 'one cow',
      answer: {'1': blue, '2': red, '3': red, '4': red},
      game: {'1': red, '2': yellow, '3': yellow, '4': yellow},
      expected: { bulls: 0, cows: 1 },
    }
  ];
  tests.map(t => {
    test(t.name, () => {
      const res = CheckAnswer({ answer: t.answer, game: t.game });
      expect(res).toEqual(t.expected);
    });
  });
});
