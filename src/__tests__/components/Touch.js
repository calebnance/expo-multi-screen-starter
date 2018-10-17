import React from 'react';
import { shallow } from 'enzyme';

import Touch from '../../components/Touch';

describe('<Touch />', () => {
  it('renders correctly', () => {
    const onPressEvent = jest.fn();
    onPressEvent.mockReturnValue('Touch on press invoked');

    const component = shallow(<Touch onPress={onPressEvent} />);

    expect(component).toMatchSnapshot();
  });
});
