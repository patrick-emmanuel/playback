import Menu from './Menu';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  color: white;
  padding-top: 10px;
  flex: 3;
`;

const MenuList = ({ menus }) => (
  <Wrapper>{menus.map(menu => <Menu key={menu.name} menu={menu} />)}</Wrapper>
);

export default MenuList;
