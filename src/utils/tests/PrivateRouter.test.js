import React, { Component } from 'react';
import { PrivateRoute } from '../PrivateRoute';
import { shallow } from 'enzyme';
import { Route, Redirect } from 'react-router-dom';

const localStorage = require('../localStorage');

beforeAll(() => {});

describe('<PrivateRoute/>', () => {
  it('should redirect to login with no authentication', () => {
    const component = <div />;
    const renderedComponent = shallow(
      <PrivateRoute path="/tasks" component={component} />
    );
    expect(renderedComponent.find(Route).props().render).toEqual(Redirect);
  });
});
