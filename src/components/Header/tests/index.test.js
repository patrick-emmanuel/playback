import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';
import NavBar from '../NavBar';

describe('<Header />', () => {
  it('render a StyledNavbar', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a div', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.type()).toEqual('div');
  });
  it('should render children when passed in', () => {
    const wrapper = shallow( < Header / > );
    expect(wrapper.find(NavBar).length).toBe(1);
  });
});
