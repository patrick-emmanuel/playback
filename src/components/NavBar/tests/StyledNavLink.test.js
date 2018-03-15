import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'reactstrap';

import StyledNavLink from '../StyledNavLink';

describe('<StyledNavLink />', () => {
  it('render a StyledNavLink', () => {
    const wrapper = shallow(<StyledNavLink />);
    expect(wrapper).toMatchSnapshot();
  });
  it('render a reactstrap NavLink', () => {
    const renderedComponent = shallow(<StyledNavLink />);
    expect(renderedComponent.type()).toEqual(NavLink);
  });
  it('should have a defined className prop', () => {
    const renderedComponent = shallow(<StyledNavLink />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('should have a defined href prop', () => {
    const renderedComponent = shallow(<StyledNavLink href="/components/" />);
    expect(renderedComponent.prop('href')).toBeDefined();
  });
  it('should render the right href prop', () => {
    const renderedComponent = shallow(<StyledNavLink href="/components/" />);
    expect(renderedComponent.prop('href')).toEqual('/components/');
  });
  it('should have an undefined href prop', () => {
    const renderedComponent = shallow(<StyledNavLink />);
    expect(renderedComponent.prop('href')).toBeUndefined();
  });
});
