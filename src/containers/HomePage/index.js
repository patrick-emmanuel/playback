import React, { Component } from 'react';
import SideBar from '../../components/SideBar';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';
import SideBarMenu from '../../components/SideBarMenu';
import MiniPlayer from '../../components/MiniPlayer';
import FlowPlayer from '../../components/FlowPlayer';
import MainPage from './MainPage';
import menuData from './menuData';
import LogoWrapper from './LogoWrapper';

class ExplorePage extends Component {
  state = {
    menus: menuData
  };
  render() {
    return <div>
        <SideBar>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <SearchBar />
          <SideBarMenu menus={this.state.menus} />
          <MiniPlayer />
        </SideBar>
        <MainPage>
          <FlowPlayer />
        </MainPage>
      </div>;
  }
}

export default ExplorePage;
