import * as React from 'react';
import { StatusBar } from 'react-native';
import { ScreenOrientation } from 'expo';
import AppLoading from 'expo-app-loading';
import { Appearance } from 'react-native-appearance';
import { device, func } from './src/constants';

// main navigation stack
import RootStack from './src/navigation/RootStack';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      theme: 'light'
    };

    // is iPad?
    if (device.isPad) {
      ScreenOrientation.allowAsync(
        ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN
      );
    }

    this.updateTheme = this.updateTheme.bind(this);
  }

  componentDidMount() {
    // get system preference
    const colorScheme = Appearance.getColorScheme();

    // if light or dark
    if (colorScheme !== 'no-preference') {
      this.setState({
        theme: colorScheme
      });
    }
  }

  updateTheme(themeType) {
    this.setState({
      theme: themeType
    });
  }

  render() {
    const { isLoading, theme } = this.state;
    const iOSStatusType = theme === 'light' ? 'dark-content' : 'light-content';

    if (isLoading) {
      return (
        <AppLoading
          onError={console.warn}
          onFinish={() => this.setState({ isLoading: false })}
          startAsync={func.loadAssetsAsync}
        />
      );
    }

    return (
      <React.Fragment>
        <StatusBar barStyle={device.iOS ? iOSStatusType : 'light-content'} />

        <RootStack
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
