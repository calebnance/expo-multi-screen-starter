import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';
import { gStyle } from '../constants';

// components
import Touch from '../components/Touch';

const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={gStyle.container}>
    <ScrollView contentContainerStyle={gStyle.contentContainer}>
      <Text style={gStyle.text}>Home Content Area</Text>

      <View style={gStyle.spacer80} />

      <Touch
        onPress={() => navigation.navigate('MultiBase')}
        text="jump to Multi tab"
      />
    </ScrollView>
  </SafeAreaView>
);

HomeScreen.navigationOptions = {
  header: null
};

HomeScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default HomeScreen;
