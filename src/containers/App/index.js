import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import HomePage from '../HomePage';
//import {PrivateRoute} from '../../utils/PrivateRoute';


class App extends Component {
  render() {
    return <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>;
  }
}

export default App;
