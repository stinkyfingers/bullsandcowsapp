
export const red = 'red';
export const blue = 'blue';
export const green = 'green';
export const orange = 'orange';
export const yellow = 'yellow';
export const purple = 'purple';
export const colors = [red, blue, green, yellow, orange, purple];
export const gameLength = 12;

/*
{
  answer: {
    '1': blue,
    '2': green,
    '3': red,
    '4': green
  },
  rounds: [{
    '1': blue,
    '2': green,
    '3': green,
    '4': yellow,
    bulls: 2,
    cows: 1,
    number: 1
  }],
}

*/

export const NewGame = () => {
  return {
    answer: {
      '1': colors[Math.floor(Math.random() * colors.length)],
      '2': colors[Math.floor(Math.random() * colors.length)],
      '3': colors[Math.floor(Math.random() * colors.length)],
      '4': colors[Math.floor(Math.random() * colors.length)],
    }
  }
};

export const CheckAnswer = ({ answer, game }) => {
  const places = ['1', '2', '3', '4'];
  const output = { bulls: 0, cows: 0 };
  const colors = { game: {}, answer: {}};
  places.map(place => {
    if (answer[place] === game.answer[place]) {
      output.bulls++
    } else {
      colors.game[game.answer[place]] ? colors.game[game.answer[place]]++ : colors.game[game.answer[place]] = 1;
      colors.answer[answer[place]] ? colors.answer[answer[place]]++ : colors.answer[answer[place]] = 1;
    }
  });

  for (const color in colors.game) {
    if (!colors.answer[color]) continue;
    if (colors.answer[color] <= colors.game[color]) {
      output.cows += colors.answer[color];
    } else {
      output.cows += colors.game[color];
    }
  }
  return output;
}