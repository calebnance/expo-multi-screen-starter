import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { utilStyles } from '../api/constants';

// grab svg icon
import SvgCircleLeft from './icons/Svg.CircleLeft';

const NavigationBack = props => {
  const { navigation } = props;

  return (
    <TouchableOpacity
      accessible
      accessibilityLabel="go back"
      accessibilityComponentType="button"
      accessibilityTraits="button"
      activeOpacity={utilStyles.opacityActive}
      onPress={() => navigation.goBack(navigation.state.key)}
      style={{ paddingHorizontal: 8, paddingVertical: 12 }}
    >
      <SvgCircleLeft active />
    </TouchableOpacity>
  );
};

// type checking
NavigationBack.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default NavigationBack;
