import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import TabsNav from './TabsNav';

const SwitchNavigator = createSwitchNavigator({
  Main: TabsNav
});

const App = createAppContainer(SwitchNavigator);

export default App;
