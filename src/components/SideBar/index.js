import React, { Component } from 'react';
import menuData from '../../helpers/menuData';
import SearchBar from '../SearchBar';
import Logo from '../Logo';
import LogoWrapper from './LogoWrapper';
import SideBarMenu from '../SideBarMenu';
import MiniPlayer from '../MiniPlayer';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 270px;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  flex-direction: column;
  display: flex;
  background: linear-gradient(
    180deg,
    #422d2d 27.57%,
    #7c5a35 55.25%,
    #f5b847 99.61%
  );
`;

class SideBar extends Component {
  state = {
    menus: menuData
  };
  render() {
    return (
      <Wrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <SearchBar />
        <SideBarMenu menus={this.state.menus} />
        <MiniPlayer />
      </Wrapper>
    );
  }
}

export default SideBar;
