import React, { Component } from 'react';
import SideBar from '../../components/SideBar';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';

class ExplorePage extends Component {
  render() {
    return (
      <div>
        <SideBar>
          <Logo />
          <SearchBar />
        </SideBar>
      </div>
    );
  }
}

export default ExplorePage;
