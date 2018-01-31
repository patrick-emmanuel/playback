import HomeHero from '../index';
import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../Wrapper';

describe('<HomeHero />', () => {
  it('render a HomeHero', () => {
    const wrapper = shallow(<HomeHero />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a Wrapper component', () => {
    const renderedComponent = shallow(<HomeHero />);
    expect(renderedComponent.type()).toEqual(Wrapper);
  });
});
