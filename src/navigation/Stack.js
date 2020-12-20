import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// grab tabbed stacks
import TabNavigator from './TabNavigator';

const StackNavigator = createStackNavigator(
  {
    TabNavigator
  },
  {
    headerMode: 'none',
    initialRouteName: 'TabNavigator',
    mode: 'modal'
  }
);

const MainStack = createAppContainer(StackNavigator);

export default MainStack;
