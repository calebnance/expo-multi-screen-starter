import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { gStyle } from '../constants';

const Stats = () => {
  const theme = 'dark';

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      <Text style={gStyle.text[theme]}>Stats content area</Text>
    </ScrollView>
  );
};

Stats.navigationOptions = {
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Stats'
};

export default Stats;
