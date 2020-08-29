import { createBottomTabNavigator } from 'react-navigation-tabs';
import { colors } from '../constants';

// navigation stacks
import HomeStack from './HomeStack';
import MultiStack from './MultiStack';
import StatsStack from './StatsStack';
import SettingsStack from './SettingsStack';

export default createBottomTabNavigator(
  {
    HomeStack,
    MultiStack,
    StatsStack,
    SettingsStack
  },
  {
    initialRouteName: 'HomeStack',
    tabBarOptions: {
      activeTintColor: {
        light: colors.darkColor,
        dark: colors.grey
      },
      inactiveTintColor: {
        light: colors.grey,
        dark: colors.white20
      }
    }
  }
);
