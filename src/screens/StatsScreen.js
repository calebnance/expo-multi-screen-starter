import React from 'react';
import { ScrollView, Text } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';

const StatsScreen = () => {
  const theme = useTheme();

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      <Text style={gStyle.text[theme]}>Stats content area</Text>
    </ScrollView>
  );
};

StatsScreen.navigationOptions = {
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center'
  },
  title: 'Stats'
};

export default StatsScreen;
