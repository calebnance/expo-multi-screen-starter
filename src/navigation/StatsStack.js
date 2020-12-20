import * as React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import StatsScreen from '../screens/StatsScreen';

// icons
import SvgStats from '../components/icons/Svg.Stats';

const StatsTabBarIcon = ({ focused }) => <SvgStats active={focused} />;
StatsTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

// Stats Stack
// /////////////////////////////////////////////////////////////////////////////
const StatsStack = createStackNavigator(
  {
    Stats: StatsScreen
  },
  {
    navigationOptions: {
      tabBarLabel: 'Stats',
      tabBarIcon: StatsTabBarIcon
    }
  }
);

export default StatsStack;
