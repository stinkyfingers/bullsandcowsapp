import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return <View style={styles.about}>
    <Text style={styles.block}>
      The goal is to guess the sequence of four colors in 12 or fewer tries.
      Colors may be repeated. After each guess, you will receive a ranking of "bulls" and "cows" explained below.
      Four "bulls" indicates that you've won!
    </Text>
    <Text style={styles.block}>
      Each bull implies a guess that is in the correct location AND is the correct color.
    </Text>
    <Text style={styles.block}>
      Each cow implies a guess that is in the incorrect location BUT is a correct color.
    </Text>
  </View>
};

const styles = StyleSheet.create({
  about: {
    width: '80%'
  },
  block: {
    marginTop: 10
  }
})

export default About;