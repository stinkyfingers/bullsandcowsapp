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
      1: colors[Math.floor(Math.random() * colors.length)],
      2: colors[Math.floor(Math.random() * colors.length)],
      3: colors[Math.floor(Math.random() * colors.length)],
      4: colors[Math.floor(Math.random() * colors.length)],
    }
  };
};

export const CheckAnswer = ({ answer, game }) => {
  const places = ['1', '2', '3', '4'];
  const output = { bulls: 0, cows: 0 };
  const choices = { game: {}, answer: {} };
  places.forEach((place) => {
    if (answer[place] === game.answer[place]) {
      output.bulls += 1;
    } else {
      choices.game[game.answer[place]] = choices.game[game.answer[place]]
        ? choices.game[game.answer[place]] + 1 : 1;
      choices.answer[answer[place]] = choices.answer[answer[place]]
        ? choices.answer[answer[place]] + 1 : 1;
    }
  });

  Object.keys(choices.game).forEach((color) => {
    if (!choices.answer[color]) return;
    if (choices.answer[color] <= choices.game[color]) {
      output.cows += choices.answer[color];
    } else {
      output.cows += choices.game[color];
    }
  });
  return output;
};
