import React from 'react';
import { Text, View, Button, StyleSheet, Alert } from 'react-native';
import { GameContext, StatusContext } from '../Context';
import { NewGame, red, green } from '../library/game';
import Circle from './Circle';

const black = '#000';

const Header = ({ orientation, toggleAbout, about, setAbout }) => {
  const [game, setGame] = React.useContext(GameContext);
  const [status, setStatus] = React.useContext(StatusContext);
  const [, setAnswer] = React.useState(false);

  const renderAnswer = () => {
    const out = [];
    Object.keys(game.answer).forEach(i => {
      out.push(<Circle color={game.answer[i]} key={`answer-${i}`} />);
    });
    return out;
  };

  const forfeit = () => {
    Alert.alert('Forfeit', 'Are you sure?', [
      {
        text: 'OK',
        onPress: () => {
          setAnswer(true);
          setStatus('lost');
        }
      },
      {
        text: 'Cancel',
        style: 'cancel'
      }
    ]);
  };

  const renderLoser = () => {
    return <View>
      <Text style={styles.lose}>Congrats! You Lose!</Text>
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

  const handleNewGame = () => {
    setGame(NewGame());
    setAnswer(false);
    setStatus('active');
    setAbout(false);
  };

  return <View style={styles[orientation]}>
    <Text style={styles.logo}>Bulls & Cows</Text>
    <View style={styles.menu}>
      <Button
        onPress={handleNewGame}
        title="New Game"
      />
      <Button
        title="Forfeit"
        disabled={status !== 'active'}
        onPress={forfeit}
      />
      <Button
        title={about ? 'Return' : 'About'}
        onPress={toggleAbout}
      />

    </View>
    { status === 'won' ? renderWinner() : null }
    { status === 'lost' ? renderLoser() : null}
  </View>;
};

const styles = StyleSheet.create({
  portrait: {
    height: '15%',
  },
  landscape: {
    height: '50%'
  },
  logo: {
    fontSize: 40,
    textAlign: 'center'
  },
  menu: {
    flexDirection: 'row',
    margin: 'auto'
  },
  answer: {
    flexDirection: 'row',
    backgroundColor: black,
    width: '100%',
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

export default Header;
