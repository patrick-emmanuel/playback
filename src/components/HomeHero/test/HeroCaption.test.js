import HeroCaption from '../HeroCaption';
import { shallow } from 'enzyme';
import React from 'react';

describe('<HeroCaption/>', () => {
  test('it should render its children', () => {
    const children = 'children';
    const renderedComponent = shallow(<HeroCaption>{children}</HeroCaption>);
    expect(renderedComponent.contains(children)).toBe(true);
  });
  test('it should render a h1 component', () => {
    const renderedComponent = shallow(<HeroCaption/>);
    expect(renderedComponent.type()).toEqual('h1');
  });
});
