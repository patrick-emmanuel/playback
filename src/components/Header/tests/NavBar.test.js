import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import NavBar from '../NavBar';

describe('<StyledNavbar />', () => {
  it('it should make a reactstrap Navbar', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });
  it('render a div', () => {
    const renderedComponent = shallow(<NavBar />);
    expect(renderedComponent.type()).toEqual('div');
  });
  it('should call the toggle method', () => {
    sinon.spy(NavBar.prototype, 'setState');
    const renderedComponent = shallow(<NavBar />);
    renderedComponent.instance().toggle();
    expect(NavBar.prototype.setState.calledOnce).toEqual(true);
  });
});