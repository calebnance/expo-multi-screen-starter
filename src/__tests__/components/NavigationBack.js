import React from 'react';
import { shallow } from 'enzyme';

import NavigationBack from '../../components/NavigationBack';

const navigation = { navigate: jest.fn() };
const component = shallow(<NavigationBack navigation={navigation} />);

describe('<NavigationBack />', () => {
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
