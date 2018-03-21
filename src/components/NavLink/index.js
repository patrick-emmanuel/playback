import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const active = {
  borderLeft: '5px solid #eb5959',
  background: '#6e4e4e'
};

const StyledLink = styled(Link)`
  width: 100%;
  height: 40px;
  text-align: left;
  line-height: 38px;
  padding-left: 13px;
  font-size: 0.9em;
  display: block;
  cursor: pointer;
  color: white;
  &:hover {
    border-left: 5px solid #eb5959;
    background: #6e4e4e;
    transition: border 0.1s;
    text-decoration: none;
    color: white;
  }
`;

const NavLink = (props) => (
  <div>
    <StyledLink {...props} activeStyle={active} />
  </div>
);

export default NavLink;
