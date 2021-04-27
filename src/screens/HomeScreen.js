import * as React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';

// components
import Touch from '../components/Touch';

//feature flags
import flagsmith from 'react-native-flagsmith';
import AsyncStorage from '@react-native-community/async-storage';
const environmentID = "nzSwVvSBKPXat8gM6guipa";

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
        {Array.isArray(screenProps.themes) && screenProps.themes.map(theme => <Touch key={theme} onPress={() => screenProps.updateTheme(theme)} text={theme + ' theme'} />)}
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
