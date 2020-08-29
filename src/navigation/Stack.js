import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// grab tabbed stacks
import TabNavigator from './TabNavigator';

const StackNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Main',
    mode: 'modal'
  }
);

const MainStack = createAppContainer(StackNavigator);

export default MainStack;
