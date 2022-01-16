import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const circleSize = 60;
const borderColor = '#000';
const white = '#fff';

const Circle = ({ color, objKey }) => <LinearGradient
  colors={[color || white, white]}
  style={styles.circle}
  key={objKey}
/>;

const styles = StyleSheet.create({
  circle: {
    height: circleSize,
    width: circleSize,
    borderRadius: circleSize / 2,
    borderColor,
    borderWidth: 1
  },
});

export default Circle;
