import React from 'react';
import renderer from 'react-test-renderer';

import Touch from '../Touch';

const tree = renderer.create(<Touch onPress={jest.fn()} />).toJSON();

describe('<Touch />', () => {
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
