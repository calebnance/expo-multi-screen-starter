import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';
import { utilStyles } from '../api/constants';

// grab component
import Touch from '../components/Touch';

const HomeScreen = props => {
  const { navigation } = props;

  return (
    <SafeAreaView style={utilStyles.container}>
      <ScrollView contentContainerStyle={utilStyles.contentContainer}>
        <Text style={utilStyles.text}>Home Content Area</Text>

        <View style={utilStyles.spacer80} />

        <Touch
          onPress={() => navigation.navigate('MultiBase')}
          text="jump to Multi tab"
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
  navigation: PropTypes.object.isRequired
};

export default HomeScreen;
