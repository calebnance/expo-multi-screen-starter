import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { utilStyles } from '../api/constants';

const StatsScreen = () => (
  <View style={utilStyles.container}>
    <ScrollView contentContainerStyle={utilStyles.contentContainer}>
      <Text style={utilStyles.text}>Stats Content Area</Text>
    </ScrollView>
  </View>
);

StatsScreen.navigationOptions = {
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center'
  },
  title: 'Stats'
};

export default StatsScreen;
