import React from 'react';
import StyledSideBar from './StyledSideBar';

const SideBar = (props) => (
  <StyledSideBar>
    {props.children}
  </StyledSideBar>
);

export default SideBar;
