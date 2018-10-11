import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';
import AppSwitchNav from './src/navigation/AppSwitchNav';
import { cacheImages } from './src/api/util';
import { colors } from './src/api/constants';

// import assets to preload
import preloadImages from './src/api/preloadAssets';

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
    const imageAssets = cacheImages(preloadImages);

    // promise load all
    await Promise.all([...imageAssets]).then(() => {
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
        <StatusBar barStyle="dark-content" />
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
