import React from 'react';
import { StatusBar, View } from 'react-native';
import { AppLoading, ScreenOrientation } from 'expo';
import { device, func, gStyle } from './src/constants';

// navigation switch
import AppSwitchNav from './src/navigation/AppSwitchNav';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };

    // iPad? (TODO in future android tablet checked)
    if (device.isTablet) {
      ScreenOrientation.allowAsync(
        ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN
      );
    }
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <AppLoading
          onFinish={() => this.setState({ isLoading: false })}
          startAsync={func.loadAssetsAsync}
        />
      );
    }

    return (
      <View style={gStyle.container}>
        <StatusBar barStyle={device.iOS ? 'dark-content' : 'light-content'} />

        <AppSwitchNav />
      </View>
    );
  }
}

export default App;
