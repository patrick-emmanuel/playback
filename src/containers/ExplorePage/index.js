import React, { Component } from 'react';
import SideBar from '../../components/SideBar';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';
import LogoWrapper from './LogoWrapper';
import menuData from './menuData';
import SideBarMenu from '../../components/SideBarMenu';
import MiniPlayer from '../../components/MiniPlayer';

class ExplorePage extends Component {
  state = {
    menus: menuData
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
          <MiniPlayer/>
        </SideBar>
      </div>
    );
  }
}

export default ExplorePage;
