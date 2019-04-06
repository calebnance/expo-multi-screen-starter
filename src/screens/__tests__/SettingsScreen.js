import React from 'react';
import renderer from 'react-test-renderer';

import SettingsScreen from '../SettingsScreen';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn()
};

const tree = renderer
  .create(<SettingsScreen navigation={navigation} />)
  .toJSON();

describe('<SettingsScreen />', () => {
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
