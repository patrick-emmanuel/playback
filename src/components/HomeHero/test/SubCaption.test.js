import { shallow } from 'enzyme';
import React from 'react';
import SubCaption from '../SubCaption';

describe('<SubCaption/>', () => {
  test('it should render its children', () => {
    const children = 'children';
    const renderedComponent = shallow(<SubCaption>{children}</SubCaption>);
    expect(renderedComponent.contains(children)).toBe(true);
  });
  test('it should render a h1 component', () => {
    const renderedComponent = shallow(<SubCaption/>);
    expect(renderedComponent.type()).toEqual('h4');
  });
});
