import React from 'react';
import renderer from 'react-test-renderer';

import HomeScreen from '../HomeScreen';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn()
};

const tree = renderer.create(<HomeScreen navigation={navigation} />).toJSON();

describe('<HomeScreen />', () => {
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
