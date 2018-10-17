import React from 'react';
import { shallow } from 'enzyme';

import NavigationBack from '../../components/NavigationBack';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
  state: {
    key: 1
  }
};
const component = shallow(<NavigationBack navigation={navigation} />);

describe('<NavigationBack />', () => {
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('onPress', () => {
    component.props().onPress();
  });
});
