import React from 'react';
import { Svg } from 'expo';
import PropTypes from 'prop-types';
import { colors } from '../../api/constants';

const SvgPages = props => {
  const { active, height, width } = props;

  return (
    <Svg height={height} width={width} viewBox="0 0 32 32">
      <Svg.Path
        d="M20 8V0H6L0 6v18h12v8h20V8H20zM6 2.828V6H2.828L6 2.828zM2 22V8h6V2h10v6l-6 6v8H2zm16-11.172V14h-3.172L18 10.828zM30 30H14V16h6v-6h10v20z"
        fill={active ? colors.brandPrimary : colors.grey}
      />
    </Svg>
  );
};

SvgPages.defaultProps = {
  active: false,
  height: 20,
  width: 20
};

SvgPages.propTypes = {
  // optional
  active: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number
};

export default SvgPages;
