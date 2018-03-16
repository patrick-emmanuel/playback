import React, { Component } from 'react';
import SideBar from '../../components/SideBar';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';
import LogoWrapper from './LogoWrapper';
import SideBarMenu from '../../components/SideBarMenu';

class ExplorePage extends Component {
  state = {
    menus: ['Home', 'Browse']
  };
  render() {
    return (
      <div>
        <SideBar>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <SearchBar />
          <SideBarMenu menus={this.state.menus} />
        </SideBar>
      </div>
    );
  }
}

export default ExplorePage;
