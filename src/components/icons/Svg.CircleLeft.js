import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'react-navigation';
import { colors } from '../../constants';

const SvgCircleLeft = ({ active, size }) => {
  const theme = useTheme();
  const fill = active
    ? colors.activeTintColor[theme]
    : colors.inactiveTintColor[theme];

  return (
    <Svg height={size} width={size} viewBox="0 0 32 32">
      <Path
        d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-29c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3z"
        fill={fill}
      />
      <Path
        d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"
        fill={fill}
      />
    </Svg>
  );
};

SvgCircleLeft.defaultProps = {
  active: false,
  size: 24
};

SvgCircleLeft.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgCircleLeft;
