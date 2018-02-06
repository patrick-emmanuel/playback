import React from 'react';
import App from '../index';
import {shallow} from 'enzyme';
import { Route } from 'react-router-dom';
import Header from '../../../components/Header';

describe('<App/>', () => {
  it('should render the header', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Header).length).toEqual(1);
  });
  it('should render a parent div container', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.type()).toEqual('div');
  });
  it('should render some routes', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Route).length).not.toBe(0);
  });
})
