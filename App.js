import React from 'react';
import { Animated, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, DangerZone, ScreenOrientation } from 'expo';
import AppSwitchNav from './src/navigation/AppSwitchNav';
import { cacheFonts, cacheImages } from './src/api/util';
import { colors, device } from './src/api/constants';

// assets to preload
import preloadFonts from './src/api/preloadFonts';
import preloadImages from './src/api/preloadImages';

// import DiamondAnimation from './src/assets/animation/diamond';

const { Lottie } = DangerZone;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      introAnimation: null,
      isLoading: true,
      showSplash: true,
      splashOpacity: new Animated.Value(1)
    };

    // iPad? (TODO in future android tablet checked)
    if (device.isTablet) {
      ScreenOrientation.allowAsync(
        ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN
      );
    }

    this.loadAssetsAsync = this.loadAssetsAsync.bind(this);
    this.loadAnimationAsync = this.loadAnimationAsync.bind(this);
    this.playAnimation = this.playAnimation.bind(this);
  }

  componentDidMount() {
    this.playAnimation();
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

  async loadAnimationAsync() {
    const path =
      'https://s3.amazonaws.com/calebnance/react-native/animations/diamond.json';
    const result = await fetch(path)
      .then(data => data.json())
      .catch(error => {
        console.error(error);
      });
    this.setState({ introAnimation: result }, this.playAnimation);
  }

  playAnimation() {
    const { introAnimation, splashOpacity } = this.state;

    if (!introAnimation) {
      this.loadAnimationAsync();
    } else {
      setTimeout(() => {
        this.animation.reset();
        this.animation.play();
      }, 0);

      setTimeout(() => {
        Animated.timing(splashOpacity, {
          toValue: 0
        }).start(() => {
          console.log('finished');
        });
      }, 1700);

      setTimeout(() => {
        this.setState({
          showSplash: false
        });
      }, 2200);
    }
  }

  render() {
    const { introAnimation, isLoading, showSplash, splashOpacity } = this.state;

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
        {introAnimation &&
          showSplash && (
            <Animated.View
              style={{
                backgroundColor: colors.brandPrimary,
                height: '100%',
                justifyContent: 'center',
                opacity: splashOpacity,
                position: 'absolute',
                width: '100%',
                zIndex: 1
              }}
            >
              <View style={{ alignSelf: 'center' }}>
                <Lottie
                  ref={animation => {
                    this.animation = animation;
                  }}
                  loop={false}
                  style={{
                    height: device.height,
                    width: device.width
                  }}
                  source={introAnimation}
                />
              </View>
            </Animated.View>
          )}
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
