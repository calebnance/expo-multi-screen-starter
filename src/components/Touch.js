import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
// import { ThemeColors, useTheme } from 'react-navigation';
import { gStyle } from '../constants';

const Touch = ({ accessible, onPress, style, text, textStyle }) => {
  // const theme = useTheme();
  // console.log('theme', theme);
  // console.log('ThemeColors', ThemeColors);
  // console.log('--------------------------');

  return (
    <TouchableOpacity
      accessible={accessible}
      activeOpacity={gStyle.activeOpacity}
      onPress={onPress}
      style={style}
    >
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

Touch.defaultProps = {
  accessible: true,
  style: gStyle.btn,
  textStyle: gStyle.btnText
};

Touch.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,

  // optional
  accessible: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  textStyle: PropTypes.object
};

export default Touch;
