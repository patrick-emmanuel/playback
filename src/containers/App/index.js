import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage';
import MainPage from '../../components/MainPage';
//import {PrivateRoute} from '../../utils/PrivateRoute';

class App extends Component {
  render() {
    return <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={MainPage} />
        </Switch>
      </div>;
  }
}

export default App;
