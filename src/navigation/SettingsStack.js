import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import SettingsScreen from '../screens/SettingsScreen';

// icons
import SvgCog from '../components/icons/Svg.Cog';

const SettingsTabBarIcon = ({ focused }) => <SvgCog active={focused} />;
SettingsTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

// Settings Stack
// /////////////////////////////////////////////////////////////////////////////
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  {
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: SettingsTabBarIcon
    }
  }
);

export default SettingsStack;
