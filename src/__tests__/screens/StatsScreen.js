import React from 'react';
import { shallow } from 'enzyme';

import StatsScreen from '../../screens/StatsScreen';

const navigation = { navigate: jest.fn() };
const screen = shallow(<StatsScreen navigation={navigation} />);

describe('<StatsScreen />', () => {
  it('renders correctly', () => {
    expect(screen).toMatchSnapshot();
  });
});
