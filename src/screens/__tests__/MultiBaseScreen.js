import React from 'react';
import renderer from 'react-test-renderer';

import MultiBaseScreen from '../MultiBaseScreen';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn()
};

const tree = renderer
  .create(<MultiBaseScreen navigation={navigation} />)
  .toJSON();

describe('<MultiBaseScreen />', () => {
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
