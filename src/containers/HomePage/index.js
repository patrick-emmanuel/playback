import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';

import HomeHero from '../../components/HomeHero';
import { attemptLogin } from './actions';
import LoginButton from '../../components/LoginButton';
import { connect } from 'react-redux';
import {makeSelectLoading} from './selector';

class HomePage extends Component {

  loginUser = e => {
    e.preventDefault();
    this.props.login();
  };

  render() {
    return (
      <div>
        <HomeHero>
          <LoginButton handleLogin={this.loginUser} />
        </HomeHero>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(attemptLogin())
  };
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading()
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
