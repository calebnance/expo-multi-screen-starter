import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'react-navigation';
import { colors } from '../../constants';

const SvgStats = ({ active, size }) => {
  const theme = useTheme();
  const fill = active
    ? colors.activeTintColor[theme]
    : colors.inactiveTintColor[theme];

  return (
    <Svg height={size} width={size} viewBox="0 0 32 32">
      <Path
        d="M0 26h32v4H0zm4-8h4v6H4zm6-8h4v14h-4zm6 6h4v8h-4zm6-12h4v20h-4z"
        fill={fill}
      />
    </Svg>
  );
};

SvgStats.defaultProps = {
  active: false,
  size: 20
};

SvgStats.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgStats;
