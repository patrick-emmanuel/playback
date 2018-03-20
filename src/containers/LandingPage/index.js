import React, { Component } from 'react';
import HomeHero from '../../components/HomeHero';
import ExploreButton from '../../components/ExploreButton';

class HomePage extends Component {
  loginUser = e => {
    e.preventDefault();
    this.props.login();
  };

  render() {
    return (
      <div>
        <HomeHero>
          <ExploreButton />
        </HomeHero>
      </div>
    );
  }
}

export default HomePage;
