import HomePage from '../index';
import { shallow } from 'enzyme';
import React from 'react';

import HeroImage from '../../../components/HomeHero';

describe('<HomePage/>', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<HomePage/>);
    expect(renderedComponent.type()).toEqual('div');
  });
  it('should render a HomeHero component', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.find(HeroImage).length).toBe(1);
  });
});