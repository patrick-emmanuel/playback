import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage';
import LandingPage from '../LandingPage';
//import {PrivateRoute} from '../../utils/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
