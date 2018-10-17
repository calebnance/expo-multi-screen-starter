import React from 'react';
import { shallow } from 'enzyme';

import SvgCircleLeft from '../../components/icons/Svg.CircleLeft';
import SvgCog from '../../components/icons/Svg.Cog';
import SvgHome from '../../components/icons/Svg.Home';
import SvgPages from '../../components/icons/Svg.Pages';
import SvgStats from '../../components/icons/Svg.Stats';

const iconCircleLeft = shallow(<SvgCircleLeft />);
const iconCog = shallow(<SvgCog />);
const iconHome = shallow(<SvgHome />);
const iconPages = shallow(<SvgPages />);
const iconStats = shallow(<SvgStats />);

describe('SVG Icons', () => {
  it('<SvgCircleLeft /> renders correctly', () => {
    expect(iconCircleLeft).toMatchSnapshot();
  });

  it('<SvgCog /> renders correctly', () => {
    expect(iconCog).toMatchSnapshot();
  });

  it('<SvgHome /> renders correctly', () => {
    expect(iconHome).toMatchSnapshot();
  });

  it('<SvgPages /> renders correctly', () => {
    expect(iconPages).toMatchSnapshot();
  });

  it('<SvgStats /> renders correctly', () => {
    expect(iconStats).toMatchSnapshot();
  });
});
