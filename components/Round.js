import React from 'react';
import { StyleSheet, View } from 'react-native';
import Circle from './Circle';

const Round = ({ board, roundNumber }) => {
  const positions = ['1', '2', '3', '4'];
  return (
    <View style={styles.round}>
      {positions.map(position => board ?
        <Circle color={board[position]} key={`round-${roundNumber}-${position}`} /> : null
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  round: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  },
})

export default Round;