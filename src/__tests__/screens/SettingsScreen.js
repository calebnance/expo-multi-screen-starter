import React from 'react';
import { shallow } from 'enzyme';

import SettingsScreen from '../../screens/SettingsScreen';

const navigation = { navigate: jest.fn() };
const screen = shallow(<SettingsScreen navigation={navigation} />);

describe('<SettingsScreen />', () => {
  it('renders correctly', () => {
    expect(screen).toMatchSnapshot();
  });
});
