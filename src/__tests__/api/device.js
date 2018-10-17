import React from 'react';
import { shallow } from 'enzyme';

import App from '../../../App';

// mock react-native-screens
jest.mock('react-native-screens', () => ({
  useScreens: jest.fn()
}));

/*
jest.mock('Platform', () => {
  const Platform = require.requireActual('Platform');
  Platform.OS = 'android';
  // Platform.OS = 'ios';

  return Platform;
});
*/

// hit iPhoneX flag
jest.mock('Dimensions', () => {
  const Dimensions = {
    get: jest.fn().mockReturnValue({ height: 812, width: 375 })
  };

  return Dimensions;
});

const app = shallow(<App />);

describe('device.js', () => {
  it('iPhoneX === true', () => {
    expect(app).toMatchSnapshot();
  });
});
