import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { GameContext, StatusContext } from '../Context';
import { NewGame, red, green } from '../library/game';

const black = '#000';

const Header = ({ orientation, toggleAbout, about, setAbout }) => {
  const [, setGame] = React.useContext(GameContext);
  const [status, setStatus] = React.useContext(StatusContext);
  const [, setAnswer] = React.useState(false);

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

  const handleNewGame = () => {
    setGame(NewGame());
    setAnswer(false);
    setStatus('active');
    setAbout(false);
  };

  return <View style={styles[orientation]}>
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
  </View>;
};

const styles = StyleSheet.create({
  portrait: {},
  landscape: {
    height: '50%'
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
