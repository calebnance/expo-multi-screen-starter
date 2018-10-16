import React from 'react';
import { shallow } from 'enzyme';

import App from '../../App';

const app = shallow(<App />);

describe('<App />', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });
});

describe('<App /> State', () => {
  it('state: isLoading = true', () => {
    // initial state: isLoading
    expect(app.state('isLoading')).toEqual(true);
    expect(app).toMatchSnapshot();
  });

  it('state: isLoading = false', () => {
    // mock isLoading completed
    app.setState({
      isLoading: false
    });

    expect(app).toMatchSnapshot();
  });
});
