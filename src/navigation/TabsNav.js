import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import PropTypes from 'prop-types';
import { colors } from '../api/constants';

// grab screens
import HomeScreen from '../screens/HomeScreen';
import MultiBaseScreen from '../screens/MultiBaseScreen';
import MultiLevel2Screen from '../screens/MultiLevel2Screen';
import SettingsScreen from '../screens/SettingsScreen';
import StatsScreen from '../screens/StatsScreen';

// grab svg icons
import SvgCog from '../components/icons/Svg.Cog';
import SvgHome from '../components/icons/Svg.Home';
import SvgPages from '../components/icons/Svg.Pages';
import SvgStats from '../components/icons/Svg.Stats';

// Home Stack
// /////////////////////////////////////////////////////////////////////////////
const HomeStack = createStackNavigator({
  Home: HomeScreen
});

const HomeTabBarIcon = ({ focused }) => <SvgHome active={focused} />;
HomeTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: HomeTabBarIcon
};

// Pages Stack
// /////////////////////////////////////////////////////////////////////////////
const MultiStack = createStackNavigator({
  MultiBase: MultiBaseScreen,
  MultiLevel2: MultiLevel2Screen
});

const MultiTabBarIcon = ({ focused }) => <SvgPages active={focused} />;
MultiTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

MultiStack.navigationOptions = {
  tabBarLabel: 'Multi',
  tabBarIcon: MultiTabBarIcon
};

// Settings Stack
// /////////////////////////////////////////////////////////////////////////////
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

const SettingsTabBarIcon = ({ focused }) => <SvgCog active={focused} />;
SettingsTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: SettingsTabBarIcon
};

// Status Stack
// /////////////////////////////////////////////////////////////////////////////
const StatsStack = createStackNavigator({
  Stats: StatsScreen
});

const StatsTabBarIcon = ({ focused }) => <SvgStats active={focused} />;
StatsTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

StatsStack.navigationOptions = {
  tabBarLabel: 'Stats',
  tabBarIcon: StatsTabBarIcon
};

export default createBottomTabNavigator(
  {
    HomeStack,
    MultiStack,
    SettingsStack,
    StatsStack
  },
  {
    tabBarOptions: {
      activeTintColor: colors.brandPrimary,
      inactiveTintColor: colors.grey
    }
  }
);
