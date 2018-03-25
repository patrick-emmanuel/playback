import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage';
import ExplorePage from '../../containers/ExplorePage';
//import {PrivateRoute} from '../../utils/PrivateRoute';

class App extends Component {
  render() {
    return <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={ExplorePage} />
        </Switch>
      </div>;
  }
}

export default App;
