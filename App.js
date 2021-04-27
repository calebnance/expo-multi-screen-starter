import * as React from 'react';
import { StatusBar } from 'react-native';
import { ScreenOrientation } from 'expo';
import AppLoading from 'expo-app-loading';
import { Appearance } from 'react-native-appearance';
import { device, func } from './src/constants';
import flagsmith from 'react-native-flagsmith';

// tab navigator
import Stack from './src/navigation/Stack';

import AsyncStorage from '@react-native-community/async-storage';
const environmentID = "nzSwVvSBKPXat8gM6guipa";

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
    const { handleFlags, handleFlagsError } = this;
    flagsmith.init({
      environmentID,
      cacheFlags: true,
      AsyncStorage,
      enableLogs: false,
      onChange: handleFlags,
      onError: handleFlagsError
    });
    flagsmith.startListening(12000);

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

        <Stack
          screenProps={{
            updateTheme: this.updateTheme,
            themes: JSON.parse(flagsmith.getValue('themes'))
          }}
          theme={theme}
        />
      </React.Fragment>
    );
  }

  handleFlags = (oldFlags, params) => {
    this.setState({
      ...params,
      isLoading: false,
      logs: [{
        timestamp: new Date().toTimeString(),
        params: JSON.stringify(params),
        oldData: JSON.stringify(oldFlags),
        data: JSON.stringify(flagsmith.getAllFlags()),
      }].concat(this.state.logs)
    });
  };
  handleFlagsError = (data) => {
    console.log('Error getting feature flags', data);
  };
}

export default App;
