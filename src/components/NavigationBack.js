import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { gStyle } from '../constants';

// icons
import SvgCircleLeft from '../icons/Svg.CircleLeft';

const NavigationBack = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      onPress={() => navigation.goBack(null)}
      style={styles.container}
    >
      <SvgCircleLeft active />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16
  }
});

export default NavigationBack;
