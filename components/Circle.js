import React from 'react';
import { StyleSheet, View } from 'react-native';

const circleSize = 60;

const Circle = ({ color, objKey }) => {
  return <View style={[ styles.circle, { backgroundColor: color } ]} key={objKey} />
};

const styles = StyleSheet.create({
  circle: {
    height: circleSize,
    width: circleSize,
    borderRadius: circleSize/2,
    borderColor: '#000',
    borderWidth: 1
  },
})

export default Circle;