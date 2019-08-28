import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'react-navigation';
import { colors } from '../../constants';

const SvgPages = ({ active, size }) => {
  const theme = useTheme();
  const fill = active
    ? colors.activeTintColor[theme]
    : colors.inactiveTintColor[theme];

  return (
    <Svg height={size} width={size} viewBox="0 0 32 32">
      <Path
        d="M20 8V0H6L0 6v18h12v8h20V8H20zM6 2.828V6H2.828L6 2.828zM2 22V8h6V2h10v6l-6 6v8H2zm16-11.172V14h-3.172L18 10.828zM30 30H14V16h6v-6h10v20z"
        fill={fill}
      />
    </Svg>
  );
};

SvgPages.defaultProps = {
  active: false,
  size: 20
};

SvgPages.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgPages;
