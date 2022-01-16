import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { GameContext, StatusContext } from '../Context';
import { green, red } from '../library/game';
import Circle from './Circle';

const black = '#000';

const Result = ({ orientation }) => {
  const [game] = React.useContext(GameContext);
  const [status] = React.useContext(StatusContext);

  const renderAnswer = () => {
    const out = [];
    Object.keys(game.answer).forEach(i => {
      out.push(<Circle color={game.answer[i]} key={`answer-${i}`} />);
    });
    return out;
  };

  const renderLoser = () => {
    return <View>
      <Text style={styles.lose}>Oh no...you lose!</Text>
      <Text style={styles.correct}>Correct answer:</Text>
      <View style={styles.answer}>
        {renderAnswer()}
      </View>
    </View>;
  };

  const renderWinner = () => {
    return <View>
      <Text style={styles.won}>{`You won in ${game.rounds.length} ${game.rounds.length > 1 ? 'moves' : 'move'}!`}</Text>
      <View style={styles.answer}>
        {renderAnswer()}
      </View>
    </View>;
  };

  return <View style={styles[orientation]}>
    { status === 'won' ? renderWinner() : null }
    { status === 'lost' ? renderLoser() : null}
  </View>;
};

const styles = StyleSheet.create({
  portrait: {},
  menu: {
    flexDirection: 'row',
    margin: 'auto'
  },
  answer: {
    flexDirection: 'row',
    backgroundColor: black,
    justifyContent: 'center',
    padding: 5
  },
  won: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 20,
    color: green
  },
  lose: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 20,
    color: red
  },
  correct: {
    textAlign: 'center'
  }
});

export default Result;
