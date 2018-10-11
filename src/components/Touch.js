import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { utilStyles } from '../api/constants';

class Touch extends React.PureComponent {
  render() {
    const { icon, opacityActive, onPress, style, text, textStyle } = this.props;

    return (
      <TouchableOpacity
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

// default props
Touch.defaultProps = {
  icon: null,
  opacityActive: utilStyles.opacityActive,
  style: {},
  text: '',
  textStyle: {
    textAlign: 'center'
  }
};

// type checking
Touch.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,

  // optional
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
