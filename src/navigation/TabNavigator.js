import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { colors } from '../constants';

// navigation stacks
import HomeStack from './HomeStack';
import MultiStack from './MultiStack';
import SettingsStack from './SettingsStack';
import StatsStack from './StatsStack';

const TabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    MultiStack,
    SettingsStack,
    StatsStack
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
