import React from 'react';
import renderer from 'react-test-renderer';

import StatsScreen from '../StatsScreen';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn()
};

const tree = renderer.create(<StatsScreen navigation={navigation} />).toJSON();

describe('<StatsScreen />', () => {
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
