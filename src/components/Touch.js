import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../constants';

const Touch = ({ accessible, activeO, onPress, style, text, textStyle }) => (
  <TouchableOpacity
    accessible={accessible}
    activeOpacity={activeO}
    onPress={onPress}
    style={style}
  >
    <Text style={textStyle}>{text}</Text>
  </TouchableOpacity>
);

Touch.defaultProps = {
  accessible: true,
  activeO: gStyle.activeO,
  style: gStyle.btn,
  text: '',
  textStyle: gStyle.btnText
};

Touch.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,

  // optional
  accessible: PropTypes.bool,
  activeO: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  text: PropTypes.string,
  textStyle: PropTypes.object
};

export default Touch;
