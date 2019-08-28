import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-navigation';
import { colors, gStyle } from '../constants';

// components
import Touch from '../components/Touch';

const MultiBaseScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={gStyle.container[theme]}
    >
      <Text style={gStyle.text[theme]}>Multi screen content area</Text>

      <View style={gStyle.spacer64} />

      <Touch
        onPress={() => navigation.navigate('MultiLevel2')}
        text="Go to level 2"
      />
    </ScrollView>
  );
};

MultiBaseScreen.navigationOptions = {
  headerStyle: gStyle.headerStyle,
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Multi Screens'
};

MultiBaseScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 30
  }
});

export default MultiBaseScreen;
