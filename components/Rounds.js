import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { DraxProvider } from 'react-native-drax';
import { GameContext } from '../Context';
import Round from './Round';

const grey = '#eee';
const white = '#fff';

const Rounds = ({ orientation }) => {
  const [game] = React.useContext(GameContext);

  const renderPreviousRounds = () => {
    if (!game.rounds) return null;
    return game.rounds.map((round, i) => <View style={styles.previousRound} key={`round-${i}`}>
      <Text style={styles.roundNumber}>{`Round #${round.number}`}</Text>
      <Round board={round.board} roundNumber={i} />
      <Text style={styles.bulls}>
        Bulls:&nbsp;
        {round.bulls}
      </Text>
      <Text style={styles.cows}>
        Cows:&nbsp;
        {round.cows}
      </Text>
    </View>);
  };

  if (!game) return <View />;

  return <View style={styles[orientation]}>
    <DraxProvider>
      <ScrollView>
        { renderPreviousRounds() }
      </ScrollView>
    </DraxProvider>
  </View>;
};

const styles = StyleSheet.create({
  portrait: {
    flex: 2,
    paddingBottom: 25
  },
  landscape: {}, // TODO
  previousRound: {
    backgroundColor: grey,
    borderBottomColor: white,
    borderBottomWidth: 2,
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
});

export default Rounds;
