import React from 'react';
import { Animated, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, DangerZone, ScreenOrientation } from 'expo';
import { colors, device, func } from './src/api/constants';

// get react navigation switch
import AppSwitchNav from './src/navigation/AppSwitchNav';

// assets to preload
import preloadFonts from './src/api/preloadFonts';
import preloadImages from './src/api/preloadImages';

// danger zone
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
    const fontAssets = func.cacheFonts(preloadFonts);
    const imageAssets = func.cacheImages(preloadImages);

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
      .catch(error => console.error(error));
    this.setState({ introAnimation: result }, this.playAnimation);
  }

  playAnimation() {
    const { introAnimation, splashOpacity } = this.state;

    if (!introAnimation) {
      if (!device.isWeb) this.loadAnimationAsync();
    } else {
      setTimeout(() => {
        this.animation.reset();
        this.animation.play();
      }, 0);

      // start to fade the animation out before it's completely finished
      setTimeout(() => {
        Animated.timing(splashOpacity, {
          toValue: 0
        }).start(() => {
          // console.log('animation finished');
          this.setState({
            showSplash: false
          });
        });
      }, 1700);
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
        <AppSwitchNav />
        {introAnimation && showSplash && (
          <Animated.View
            style={[styles.containerSplash, { opacity: splashOpacity }]}
          >
            <View style={styles.alignCenter}>
              <Lottie
                ref={animation => {
                  this.animation = animation;
                }}
                loop={false}
                style={styles.lottie}
                source={introAnimation}
              />
            </View>
          </Animated.View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  containerSplash: {
    backgroundColor: colors.brandPrimary,
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%'
  },
  alignCenter: {
    alignSelf: 'center'
  },
  lottie: {
    height: device.height,
    width: device.width
  }
});

export default App;
