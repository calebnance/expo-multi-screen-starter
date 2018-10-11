import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../api/constants';

const MultiLevel2Screen = () => (
  <View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.textStyle}>
        Multi Screens :: Level 2 Content Area
      </Text>
    </ScrollView>
  </View>
);

MultiLevel2Screen.navigationOptions = {
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center'
  },
  title: 'Level 2'
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

export default MultiLevel2Screen;
