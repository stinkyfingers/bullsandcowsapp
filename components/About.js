import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return <View style={styles.about}>
    <Text style={styles.block}>
      The goal is to guess the sequence of four colors in 12 or fewer tries.
      Colors may be repeated. After each guess, you will receive a ranking
      of &quot;bulls&quot; and &quot;cows&quot; explained below.
      Four &quot;bulls&quot; indicates that you&apos;ve won!
    </Text>
    <Text style={styles.block}>
      Each bull implies a guess that is in the correct location AND is the correct color.
    </Text>
    <Text style={styles.block}>
      Each cow implies a guess that is in the incorrect location BUT is a correct color.
    </Text>
  </View>;
};

const styles = StyleSheet.create({
  about: {
    width: '80%'
  },
  block: {
    marginTop: 10
  }
});

export default About;
