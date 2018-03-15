import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage';
import ExplorePage from '../ExplorePage';
//import {PrivateRoute} from '../../utils/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/explore" component={ExplorePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
