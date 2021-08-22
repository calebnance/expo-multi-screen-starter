import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import MultiBaseScreen from '../screens/MultiBase';
import MultiLevel2Screen from '../screens/MultiLevel2';

// components
import NavigationBack from '../components/NavigationBack';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MultiBase"
      component={MultiBaseScreen}
      options={{
        headerTintColor: '#432818',
        headerStyle: { backgroundColor: '#bb9457' },
        title: 'Multi Base'
      }}
    />
    <Stack.Screen
      name="MultiLevel2"
      component={MultiLevel2Screen}
      options={{
        headerLeft: () => <NavigationBack />,
        headerTintColor: '#432818',
        headerStyle: { backgroundColor: '#bb9457' },
        title: 'Multi Level 2'
      }}
    />
  </Stack.Navigator>
);
