import React from 'react';
import renderer from 'react-test-renderer';

import NavigationBack from '../NavigationBack';

const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn()
};

const tree = renderer
  .create(<NavigationBack navigation={navigation} />)
  .toJSON();

describe('<NavigationBack />', () => {
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  it('has 1 child', () => {
    expect(tree.children.length).toBe(1);
  });
});
