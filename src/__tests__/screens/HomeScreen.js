import React from 'react';
import { shallow } from 'enzyme';

import HomeScreen from '../../screens/HomeScreen';

const navigation = { navigate: jest.fn() };
const screen = shallow(<HomeScreen navigation={navigation} />);

describe('<HomeScreen />', () => {
  it('renders correctly', () => {
    expect(screen).toMatchSnapshot();
  });

  it('onPress', () => {
    screen
      .find('Touch')
      .props()
      .onPress();
  });
});
