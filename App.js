import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';
import AppSwitchNav from './src/navigation/AppSwitchNav';
import { cacheFonts, cacheImages } from './src/api/util';
import { colors } from './src/api/constants';

// assets to preload
import preloadFonts from './src/api/preloadFonts';
import preloadImages from './src/api/preloadImages';

// make screens fast and stuff
useScreens();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };

    this.loadAssetsAsync = this.loadAssetsAsync.bind(this);
  }

  async loadAssetsAsync() {
    // preload image assets
    const fontAssets = cacheFonts(preloadFonts);
    const imageAssets = cacheImages(preloadImages);

    // promise load all
    await Promise.all([...fontAssets, ...imageAssets]).then(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <AppLoading
          // onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoading: false })}
          startAsync={this.loadAssetsAsync}
        />
      );
    }

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        />
        <AppSwitchNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  }
});

export default App;
