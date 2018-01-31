import React from 'react';
import { shallow } from 'enzyme';

import Separator from '../Separator';

describe('<Separator />', () => {
  it('render a Separator', () => {
    const wrapper = shallow(<Separator />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a h6 tag', () => {
    const renderedComponent = shallow(<Separator />);
    expect(renderedComponent.type()).toEqual('h6');
  });
  it('should render a h6 tag', () => {
    const renderedComponent = shallow(<Separator />);
    expect(renderedComponent.type()).toEqual('h6');
  });
  it('should render children', () => {
    const children = '|';
    const renderedComponent = shallow(<Separator>{children}</Separator>);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
