import React from 'react';
import { shallow } from 'enzyme';

import MultiLevel2Screen from '../../screens/MultiLevel2Screen';

const navigation = { navigate: jest.fn() };
const screen = shallow(<MultiLevel2Screen navigation={navigation} />);

describe('<MultiLevel2Screen />', () => {
  it('renders correctly', () => {
    expect(screen).toMatchSnapshot();
  });
});
