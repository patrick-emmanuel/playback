import React from 'react';
import { shallow } from 'enzyme';

import StyledNavbarBrand from '../StyledNavbarBrand';
import { NavbarBrand } from 'reactstrap';

describe('<StyledNavbarBrand />', () => {
  it('render a StyledNavbarBrand', () => {
    const wrapper = shallow(<StyledNavbarBrand />);
    expect(wrapper).toMatchSnapshot();
  });
  it('render a reactstrap NavbarBrand', () => {
    const renderedComponent = shallow(<StyledNavbarBrand />);
    expect(renderedComponent.type()).toEqual(NavbarBrand);
  });
  it('should have a className StyledNavbarBrand', () => {
    const renderedComponent = shallow(<StyledNavbarBrand />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('should contain a href attribute', () => {
    const renderedComponent = shallow(<StyledNavbarBrand href="/" />);
    expect(renderedComponent.prop('href')).toBeDefined();
  });
  it('should contain a href attribute with value of /', () => {
    const renderedComponent = shallow(<StyledNavbarBrand href="/" />);
    expect(renderedComponent.prop('href')).toEqual("/");
  });
});
