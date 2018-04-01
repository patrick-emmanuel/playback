import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from '../../components/SearchBar';
import Logo from '../../components/Logo';
import LogoWrapper from './LogoWrapper';
import SideBarMenu from '../../components/SideBarMenu';
import Player from '../../containers/Player';

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
  background: #070707;
`;

class SideBar extends Component {

  render() {
    const { menus } = this.props;
    return (
      <div>
        <Wrapper>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <SearchBar />
          <SideBarMenu menus={menus} />
          <Player />
        </Wrapper>
      </div>
    );
  }
}

export default SideBar;
