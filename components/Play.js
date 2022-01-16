import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { DraxProvider, DraxView } from 'react-native-drax';
import { GameContext, StatusContext } from '../Context';
import { CheckAnswer, gameLength, red, blue, green, yellow, orange, purple } from '../library/game';
import Circle from './Circle';
import Result from './Result';

const Play = ({ orientation }) => {
  const [board, setBoard] = React.useState({});
  const [previousBoard, setPreviousBoard] = React.useState({});
  const [game, setGame] = React.useContext(GameContext);
  const [status, setStatus] = React.useContext(StatusContext);

  const handleEnter = (e, num) => {
    setPreviousBoard(b => ({ ...b, [num]: board[num] }));
    setBoard(b => ({ ...b, [num]: e.dragged.payload }));
  };

  const handleExit = (e, num) => {
    setBoard(b => ({ ...b, [num]: previousBoard[num] }));
  };

  const handleDrop = (e, num) => {
    setBoard(b => ({ ...b, [num]: e.dragged.payload }));
  };

  const handleSubmit = () => {
    const res = CheckAnswer({ answer: board, game });
    if (!game.rounds) {
      game.rounds = [];
    }
    const won = res.bulls === 4;
    const currentStatus = game.rounds.length + 1 === gameLength ? 'lost' : 'active';
    game.rounds.unshift({
      board,
      bulls: res.bulls,
      cows: res.cows,
      number: game.rounds.length + 1
    });
    setGame(g => ({ ...g, rounds: game.rounds }));
    setStatus(won ? 'won' : currentStatus);
    setBoard({});
  };

  const canSubmit = () => {
    return !board['1'] || !board['2'] || !board['3'] || !board['4'];
  };

  const renderCurrentRound = () => {
    if (status !== 'active') return null;
    const positions = ['1', '2', '3', '4'];
    return (
      <View style={styles.round}>
        {positions.map(position => <DraxView
          key={`round-${position}`}
          onReceiveDragEnter={(e) => handleEnter(e, position)}
          onReceiveDragDrop={(e) => handleDrop(e, position)}
          onReceiveDragExit={(e) => handleExit(e, position)}
        >
          <Circle color={board[position]} />
        </DraxView>)}
      </View>
    );
  };

  const renderPicker = () => {
    if (status !== 'active') return null;
    const colors = [red, blue, green, yellow, orange, purple];
    return (
      <View style={styles.picker}>
        {colors.map(color => <DraxView
          key={`picker-${color}`}
          payload={color}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
        >
          <Circle color={color} />
        </DraxView>)}
      </View>
    );
  };

  if (!game) return <View />;

  return <View style={styles[orientation]}>
    {status === 'active'
      ? <DraxProvider>
        <View style={styles.play}>
          { renderCurrentRound() }
        </View>
        <View style={styles.play}>
          { renderPicker() }
        </View>
        <View style={styles.play}>
          <Button
            title="Submit"
            onPress={handleSubmit}
            disabled={canSubmit()}
          />
        </View>
      </DraxProvider>
      : <Result orientation={orientation} /> }
  </View>;
};

const styles = StyleSheet.create({
  portrait: {
    flex: 1,
  },
  landscape: {}, // TODO
  play: {
    paddingTop: 10
  },
  round: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingTop: 5,
  },
  picker: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  dragging: {
    opacity: 0.5
  }
});

export default Play;
