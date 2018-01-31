import { shallow } from 'enzyme';
import React from 'react';
import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('render a Wrapper', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a div component', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent.type()).toEqual('div');
  });
  it('should render its children', () => {
    const children = 'children';
    const renderedComponent = shallow(<Wrapper>{children}</Wrapper>);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
