import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { DraxProvider, DraxView } from 'react-native-drax';
import { GameContext, StatusContext } from '../Context';
import { CheckAnswer, gameLength, red, blue, green, yellow, orange, purple } from '../library/game';
import Round from './Round';
import Circle from './Circle';

const Rounds = ({ orientation }) => {
  const [board, setBoard] = React.useState({});
  const [previousBoard, setPreviousBoard] = React.useState({})
  const [game, setGame] = React.useContext(GameContext);
  const [status, setStatus] = React.useContext(StatusContext);

  const renderPreviousRounds = () => {
    if (!game.rounds) return null;
    return game.rounds.map((round, i) => <View style={styles.previousRound} key={`round-${i}`}>
      <Text style={styles.roundNumber}>{`Round #${round.number}`}</Text>
      <Round board={round.board} roundNumber={i}/>
      <Text style={styles.bulls}>Bulls: {round.bulls}</Text>
      <Text style={styles.cows}>Cows: {round.cows}</Text>
    </View>)
  };

  if (!game) return <View />;

  return <View style={styles[orientation]}>
    <DraxProvider>
      <ScrollView>
        { renderPreviousRounds() }
      </ScrollView>
    </DraxProvider>
  </View>
}

const styles = StyleSheet.create({
  portrait: {
    flex: 4
  },
  landscape: {}, // TODO
  previousRound: {
    marginTop: 5,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#eee'
  },
  bulls: {
    textAlign: 'center',
  },
  cows: {
    textAlign: 'center',
  },
  roundNumber: {
    textAlign: 'center',
    fontWeight: '800'
  }
})

export default Rounds;