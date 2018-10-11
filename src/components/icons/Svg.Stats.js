import React from 'react';
import { Svg } from 'expo';
import PropTypes from 'prop-types';
import { colors } from '../../api/constants';

const SvgStats = props => {
  const { active, height, width } = props;

  return (
    <Svg height={height} width={width} viewBox="0 0 32 32">
      <Svg.Path
        d="M0 26h32v4H0zm4-8h4v6H4zm6-8h4v14h-4zm6 6h4v8h-4zm6-12h4v20h-4z"
        fill={active ? colors.brandPrimary : colors.grey}
      />
    </Svg>
  );
};

SvgStats.defaultProps = {
  active: false,
  height: 20,
  width: 20
};

SvgStats.propTypes = {
  // optional
  active: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number
};

export default SvgStats;
