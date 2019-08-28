import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView, useTheme } from 'react-navigation';
import { gStyle } from '../constants';

// components
import Touch from '../components/Touch';

const HomeScreen = ({ navigation, screenProps }) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={gStyle.container[theme]}>
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
    </SafeAreaView>
  );
};

HomeScreen.navigationOptions = {
  header: null
};

HomeScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};

export default HomeScreen;
