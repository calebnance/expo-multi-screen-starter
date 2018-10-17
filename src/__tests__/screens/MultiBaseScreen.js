import React from 'react';
import { shallow } from 'enzyme';

import MultiBaseScreen from '../../screens/MultiBaseScreen';

const navigation = { navigate: jest.fn() };
const screen = shallow(<MultiBaseScreen navigation={navigation} />);

describe('<MultiBaseScreen />', () => {
  it('renders correctly', () => {
    expect(screen).toMatchSnapshot();
  });
});
