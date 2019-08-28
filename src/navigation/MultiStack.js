import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';

// screens
import MultiBaseScreen from '../screens/MultiBaseScreen';
import MultiLevel2Screen from '../screens/MultiLevel2Screen';

// icons
import SvgPages from '../components/icons/Svg.Pages';

const MultiTabBarIcon = ({ focused }) => <SvgPages active={focused} />;
MultiTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

// Multi Stack
// /////////////////////////////////////////////////////////////////////////////
const MultiStack = createStackNavigator(
  {
    MultiBase: MultiBaseScreen,
    MultiLevel2: MultiLevel2Screen
  },
  {
    navigationOptions: {
      tabBarLabel: 'Multi',
      tabBarIcon: MultiTabBarIcon
    }
  }
);

export default MultiStack;
