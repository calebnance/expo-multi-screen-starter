import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { gStyle } from '../constants';

const MultiLevel2 = () => {
  const theme = 'dark';

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      <Text style={gStyle.text[theme]}>Multi screen level 2 content area</Text>
    </ScrollView>
  );
};

export default MultiLevel2;
