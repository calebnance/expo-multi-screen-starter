import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import StatsScreen from '../screens/Stats';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Stats" component={StatsScreen} />
  </Stack.Navigator>
);
