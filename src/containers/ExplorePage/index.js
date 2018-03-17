import React, { Component } from 'react';
import SideBar from '../../components/SideBar';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';
import LogoWrapper from './LogoWrapper';
import SideBarMenu from '../../components/SideBarMenu';

class ExplorePage extends Component {
  state = {
    menus: [
      {
        name: 'Home',
        iconClassName: 'fa fa-home',
        iconName: 'home'
      },
      {
        name: 'Browse',
        iconClassName: 'fa fa-search',
        iconName: 'browser'
      },
      {
        name: 'Setting',
        iconClassName: 'fa fa-wrench',
        iconName: 'wrench'
      }
    ]
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
