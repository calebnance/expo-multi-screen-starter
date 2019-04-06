import React from 'react';
import renderer from 'react-test-renderer';

import SvgCircleLeft from '../Svg.CircleLeft';
import SvgCog from '../Svg.Cog';
import SvgHome from '../Svg.Home';
import SvgPages from '../Svg.Pages';
import SvgStats from '../Svg.Stats';

describe('SVG Icons', () => {
  it('<SvgCircleLeft /> renders correctly', () => {
    const tree = renderer.create(<SvgCircleLeft />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('<SvgCog /> renders correctly', () => {
    const tree = renderer.create(<SvgCog />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('<SvgHome /> renders correctly', () => {
    const tree = renderer.create(<SvgHome />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('<SvgPages /> renders correctly', () => {
    const tree = renderer.create(<SvgPages />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('<SvgStats /> renders correctly', () => {
    const tree = renderer.create(<SvgStats />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
