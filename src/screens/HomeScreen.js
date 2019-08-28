import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { gStyle } from '../constants';

// components
import Touch from '../components/Touch';

const HomeScreen = ({ navigation, screenProps }) => (
  <SafeAreaView style={gStyle.container}>
    <ScrollView contentContainerStyle={gStyle.contentContainer}>
      <Text style={gStyle.text}>Home Content Area</Text>

      <View style={gStyle.spacer80} />

      <Touch
        onPress={() => navigation.navigate('MultiBase')}
        text="jump to Multi tab"
      />

      <Touch
        onPress={() => screenProps.updateTheme('light')}
        text="light theme"
      />
      <Touch
        onPress={() => screenProps.updateTheme('dark')}
        text="dark theme"
      />
    </ScrollView>
  </SafeAreaView>
);

HomeScreen.navigationOptions = {
  header: null
};

HomeScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};

export default HomeScreen;
