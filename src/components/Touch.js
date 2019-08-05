import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import { gStyle } from '../constants';

const Touch = ({
  accessible,
  activeOpacity,
  onPress,
  style,
  text,
  textStyle
}) => (
  <TouchableOpacity
    accessible={accessible}
    activeOpacity={activeOpacity}
    onPress={onPress}
    style={style}
  >
    <Text style={textStyle}>{text}</Text>
  </TouchableOpacity>
);

Touch.defaultProps = {
  accessible: true,
  activeOpacity: gStyle.activeOpacity,
  style: gStyle.btn,
  text: '',
  textStyle: gStyle.btnText
};

Touch.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,

  // optional
  accessible: PropTypes.bool,
  activeOpacity: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  text: PropTypes.string,
  textStyle: PropTypes.object
};

export default Touch;
