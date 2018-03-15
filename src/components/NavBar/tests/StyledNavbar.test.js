import React from 'react';
import { shallow } from 'enzyme';

import StyledNavbar from '../StyledNavbar';
import { Navbar } from 'reactstrap';

describe('<StyledNavbar />', () => {
  it('render a StyledNavbar', () => {
    const wrapper = shallow(<StyledNavbar />);
    expect(wrapper).toMatchSnapshot();
  });
  it('render a reactstrap NavBar', () => {
    const renderedComponent = shallow(<StyledNavbar />);
    expect(renderedComponent.type()).toEqual(Navbar);
  });
  it('should have a className attribute', () => {
    const renderedComponent = shallow(<StyledNavbar />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });
});
