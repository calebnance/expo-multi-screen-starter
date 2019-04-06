import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { utilStyles } from '../api/constants';

class Touch extends React.PureComponent {
  render() {
    const {
      accessible,
      icon,
      opacityActive,
      onPress,
      style,
      text,
      textStyle
    } = this.props;

    return (
      <TouchableOpacity
        accessible={accessible}
        activeOpacity={opacityActive}
        onPress={onPress}
        style={style}
      >
        {icon && icon}
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

Touch.defaultProps = {
  accessible: true,
  icon: null,
  opacityActive: utilStyles.opacityActive,
  style: utilStyles.btn,
  text: '',
  textStyle: utilStyles.btnText
};

Touch.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,

  // optional
  accessible: PropTypes.bool,
  icon: PropTypes.element,
  opacityActive: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  text: PropTypes.string,
  textStyle: PropTypes.object
};

export default Touch;
