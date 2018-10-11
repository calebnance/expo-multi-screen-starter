import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';
import { colors, utilStyles } from '../api/constants';

// grab component
import Touch from '../components/Touch';

const HomeScreen = props => {
  const { navigation } = props;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.textStyle}>Home Content Area</Text>

        <View style={utilStyles.spacer80} />

        <Touch
          onPress={() => navigation.navigate('MultiBase')}
          style={utilStyles.btn}
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

export default HomeScreen;
