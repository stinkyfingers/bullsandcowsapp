import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { GameProvider, StatusProvider } from './Context';
import Header from './components/Header';
import About from './components/About';
import Play from './components/Play';
import Rounds from './components/Rounds';

export default function App() {
  const [orientation, setOrientation] = React.useState('portrait');
  const [about, setAbout] = React.useState(false);
  const toggleAbout = () => setAbout(!about);

  ScreenOrientation.addOrientationChangeListener((ori) => {
    setOrientation(ori.orientationInfo.orientation === 3 || ori.orientationInfo.orientation === 4 ? 'landscape' : 'portrait');
  });

  return (
    <View style={[styles.container, styles[orientation]]}>
      <StatusProvider>
        <GameProvider>
          <Header toggleAbout={toggleAbout} about={about} />
          {
            about
              ? <About orientation={orientation} />
              : (
                <>
                  <Play orientation={orientation} />
                  <Rounds orientation={orientation} />
                </>
              )
          }
        </GameProvider>
      </StatusProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  portrait: {
    flexDirection: 'column',
    paddingTop: 50
  },
  landscape: {
    flexDirection: 'row'
  },
});
