import React from 'react';
import renderer from 'react-test-renderer';

import MultiLevel2Screen from '../MultiLevel2Screen';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn()
};

const tree = renderer
  .create(<MultiLevel2Screen navigation={navigation} />)
  .toJSON();

describe('<MultiLevel2Screen />', () => {
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
