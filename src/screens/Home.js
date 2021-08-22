import * as React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import Touch from '../components/Touch';

const Home = ({ navigation }) => {
  const theme = 'dark';

  return (
    <View style={gStyle.container[theme]}>
      <ScrollView contentContainerStyle={gStyle.contentContainer}>
        <Text style={gStyle.text[theme]}>Home content area</Text>

        <View style={gStyle.spacer64} />

        <Touch
          onPress={() => navigation.navigate('MultiBase')}
          text="Jump to Multi tab"
        />

        <Touch onPress={() => null} text="Light theme" />
        <Touch onPress={() => null} text="Dark theme" />
      </ScrollView>
    </View>
  );
};

Home.navigationOptions = {
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Home'
};

Home.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Home;
