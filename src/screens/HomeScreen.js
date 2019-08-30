import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';

// components
import Touch from '../components/Touch';

const HomeScreen = ({ navigation, screenProps }) => {
  const theme = useTheme();

  return (
    <View style={gStyle.container[theme]}>
      <ScrollView contentContainerStyle={gStyle.contentContainer}>
        <Text style={gStyle.text[theme]}>Home content area</Text>

        <View style={gStyle.spacer64} />

        <Touch
          onPress={() => navigation.navigate('MultiBase')}
          text="Jump to Multi tab"
        />

        <Touch
          onPress={() => screenProps.updateTheme('light')}
          text="Light theme"
        />
        <Touch
          onPress={() => screenProps.updateTheme('dark')}
          text="Dark theme"
        />
      </ScrollView>
    </View>
  );
};

HomeScreen.navigationOptions = {
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Home'
};

HomeScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};

export default HomeScreen;
