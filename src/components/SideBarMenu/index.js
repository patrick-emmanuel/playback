import Link from './Link';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  color: white;
  padding-top: 10px;
  order: 1;
  flex: 3;
`;

const LinkList = ({ menus }) => (
  <Wrapper>
    {menus.map(menu => (
      <Link
        key={menu.name}
        menu={menu}
      />
    ))}
  </Wrapper>
);

export default LinkList;
