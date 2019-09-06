import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { colors } from '../constants';

// navigation stacks
import HomeStack from './HomeStack';
import MultiStack from './MultiStack';
import StatsStack from './StatsStack';
import SettingsStack from './SettingsStack';

const TabNavigator = createBottomTabNavigator(
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

const App = createAppContainer(TabNavigator);

export default App;
