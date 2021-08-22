import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, gStyle } from '../constants';

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

export default () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: colors.white,
      tabBarInactiveTintColor: colors.inactiveGrey,
      tabBarIcon: ({ color }) => {
        let icon = <SvgHome fill={color} />;

        if (route.name === 'StackMulti') {
          icon = <SvgPages fill={color} />;
        } else if (route.name === 'StackStats') {
          icon = <SvgStats fill={color} />;
        } else if (route.name === 'StackSettings') {
          icon = <SvgCog fill={color} />;
        }

        return icon;
      },
      tabBarStyle: gStyle.navTabStyle
    })}
    tabBarOptions={{
      activeTintColor: '#e91e63'
    }}
  >
    <Tab.Screen
      name="StackHome"
      component={StackHome}
      options={{
        tabBarLabel: 'Home'
      }}
    />
    <Tab.Screen
      name="StackMulti"
      component={StackMulti}
      options={{
        tabBarLabel: 'Multi'
      }}
    />
    <Tab.Screen
      name="StackStats"
      component={StackStats}
      options={{
        tabBarLabel: 'Stats'
      }}
    />
    <Tab.Screen
      name="StackSettings"
      component={StackSettings}
      options={{
        tabBarLabel: 'Settings'
      }}
    />
  </Tab.Navigator>
);
