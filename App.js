import React from 'react';
import { Animated, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, DangerZone, ScreenOrientation } from 'expo';
import { colors, device, func, gStyle } from './src/constants';

// navigation switch
import AppSwitchNav from './src/navigation/AppSwitchNav';

// danger zone
const { Lottie } = DangerZone;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      introAnimation: null,
      isLoading: true,
      showSplash: true,
      splashOpacity: new Animated.Value(1),
      tries: 5
    };

    // iPad? (TODO in future android tablet checked)
    if (device.isTablet) {
      ScreenOrientation.allowAsync(
        ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN
      );
    }

    this.loadAnimationAsync = this.loadAnimationAsync.bind(this);
    this.playAnimation = this.playAnimation.bind(this);
  }

  componentDidMount() {
    this.loadAnimationAsync();
  }

  async loadAnimationAsync() {
    const path =
      'https://s3.amazonaws.com/calebnance/react-native/animations/diamond.json';
    const response = await fetch(path);
    const json = await response.json();

    this.setState({ introAnimation: json }, this.playAnimation);
  }

  playAnimation() {
    const { introAnimation, splashOpacity, tries } = this.state;

    // make sure animation json has loaded
    if ((!introAnimation || this.animation === undefined) && tries >= 1) {
      this.setState(
        {
          tries: tries - 1
        },
        () => {
          setTimeout(() => {
            this.playAnimation();
          }, 0);
        }
      );
      return;
    }

    // reset and start animation
    this.animation.reset();
    this.animation.play();

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
    }, 1400);
  }

  render() {
    const { introAnimation, isLoading, showSplash, splashOpacity } = this.state;

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
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        />
        {showSplash && (
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

        {!showSplash && <AppSwitchNav />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
