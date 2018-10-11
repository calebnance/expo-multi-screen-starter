import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, utilStyles } from '../api/constants';

// grab component
import Touch from '../components/Touch';

const MultiBaseScreen = props => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.textStyle}>Multi Screens Content Area</Text>

        <View style={utilStyles.spacer80} />

        <Touch
          onPress={() => navigation.navigate('MultiLevel2')}
          style={utilStyles.btn}
          text="go to level 2"
        />
      </ScrollView>
    </View>
  );
};

MultiBaseScreen.navigationOptions = {
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center'
  },
  title: 'Multi Screens'
};

MultiBaseScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.brandPrimary,
    flex: 1
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 30
  },
  textStyle: {
    color: colors.white
  }
});

export default MultiBaseScreen;
