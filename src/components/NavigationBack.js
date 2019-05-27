import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../constants';

// grab svg icon
import SvgCircleLeft from './icons/Svg.CircleLeft';

const NavigationBack = ({ navigation }) => (
  <TouchableOpacity
    accessible
    accessibilityLabel="go back"
    accessibilityComponentType="button"
    accessibilityTraits="button"
    activeOpacity={gStyle.activeO}
    onPress={() => navigation.goBack(navigation.state.key)}
    style={{ paddingHorizontal: 16, paddingVertical: 8 }}
  >
    <SvgCircleLeft active />
  </TouchableOpacity>
);

NavigationBack.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default NavigationBack;
