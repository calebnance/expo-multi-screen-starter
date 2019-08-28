import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading, ScreenOrientation } from 'expo';
import { device, func } from './src/constants';

// tab navigator
import TabNavigator from './src/navigation/TabNavigator';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      theme: 'light'
    };

    // is tablet?
    if (device.isTablet) {
      ScreenOrientation.allowAsync(
        ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN
      );
    }

    this.updateTheme = this.updateTheme.bind(this);
  }

  updateTheme(themeType) {
    this.setState({
      theme: themeType
    });
  }

  render() {
    const { isLoading, theme } = this.state;

    if (isLoading) {
      return (
        <AppLoading
          onFinish={() => this.setState({ isLoading: false })}
          startAsync={func.loadAssetsAsync}
        />
      );
    }

    return (
      <React.Fragment>
        <StatusBar barStyle={device.iOS ? 'dark-content' : 'light-content'} />

        <TabNavigator
          screenProps={{
            updateTheme: this.updateTheme
          }}
          theme={theme}
        />
      </React.Fragment>
    );
  }
}

export default App;
