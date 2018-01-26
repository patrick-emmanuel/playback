import React from 'react';
import { shallow } from 'enzyme';

import StyledNav from '../StyledNav';
import { Nav } from 'reactstrap';

describe('<StyledNavbar />', () => {
  it('render a StyledNavbar', () => {
    const wrapper = shallow(<StyledNav />);
    expect(wrapper).toMatchSnapshot();
  });
  it('render a reactstrap Nav', () => {
    const renderedComponent = shallow(<StyledNav />);
    expect(renderedComponent.type()).toEqual(Nav);
  });
  it('should have a className attribute', () => {
    const renderedComponent = shallow(<StyledNav />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });
});
