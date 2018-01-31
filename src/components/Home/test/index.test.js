import Home from '../index';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Home />', () => {
  it('render a Home', () => {
    const renderedComponent = shallow(<Home />);
    expect(renderedComponent).toMatchSnapshot();
  });
  it('should render a Wrapper component', () => {
    const renderedComponent = shallow(<Home />);
    expect(renderedComponent.type()).toEqual('div');
  });
});
