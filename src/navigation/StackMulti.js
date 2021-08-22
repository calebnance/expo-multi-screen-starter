import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import MultiBaseScreen from '../screens/MultiBase';
import MultiLevel2Screen from '../screens/MultiLevel2';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="MultiBase" component={MultiBaseScreen} />
    <Stack.Screen name="MultiLevel2" component={MultiLevel2Screen} />
  </Stack.Navigator>
);
