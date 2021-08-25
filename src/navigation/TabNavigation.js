import * as React from 'react';
import { Appearance } from 'react-native-appearance';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../constants';

// grabs stacks
import StackHome from './StackHome';
import StackMulti from './StackMulti';
import StackSettings from './StackSettings';
import StackStats from './StackStats';

// icons
import SvgCog from '../icons/Svg.Cog';
import SvgHome from '../icons/Svg.Home';
import SvgPages from '../icons/Svg.Pages';
import SvgStats from '../icons/Svg.Stats';

const Tab = createBottomTabNavigator();

// activeTintColor: {
//   light: colors.darkColor,
//   dark: colors.grey
// },
// inactiveTintColor: {
//   light: colors.grey,
//   dark: colors.white20
// }

export default () => {
  // get system preference
  const colorScheme = Appearance.getColorScheme();
  console.log('react-native-appearance::Appearance', colorScheme);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: 'purple',
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.inactiveGrey,
        tabBarStyle: {
          backgroundColor: 'brown',
          borderTopColor: 'yellow'
        },
        tabBarItemStyle: {
          // backgroundColor: 'blue'
        }
      }}
    >
      <Tab.Screen
        name="StackHome"
        component={StackHome}
        options={{
          tabBarIcon: ({ focused }) => <SvgHome active={focused} />,
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name="StackMulti"
        component={StackMulti}
        options={{
          tabBarIcon: ({ focused }) => <SvgPages active={focused} />,
          tabBarLabel: 'Multi'
        }}
      />
      <Tab.Screen
        name="StackStats"
        component={StackStats}
        options={{
          tabBarIcon: ({ focused }) => <SvgStats active={focused} />,
          tabBarLabel: 'Stats'
        }}
      />
      <Tab.Screen
        name="StackSettings"
        component={StackSettings}
        options={{
          tabBarIcon: ({ focused }) => <SvgCog active={focused} />,
          tabBarLabel: 'Settings'
        }}
      />
    </Tab.Navigator>
  );
};
