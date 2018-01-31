import { shallow } from 'enzyme';
import React from 'react';
import Hero from '../Hero';

describe('<Hero />', () => {
  it('render a HomeHero', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a Wrapper component', () => {
    const renderedComponent = shallow(<Hero />);
    expect(renderedComponent.type()).toEqual('div');
  });
  it('should render its children', () => {
    const children = 'children';
    const renderedComponent = shallow(<Hero>{children}</Hero>);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
