import React from 'react';
import { shallow } from 'enzyme';

import Touch from '../../components/Touch';

const component = shallow(<Touch onPress={() => jest.fn()} />);

describe('<Touch />', () => {
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
