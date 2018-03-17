import Link from './Link';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 16px;
  color: white;
`;

const LinkList = ({ menus }) => (
  <Wrapper>
    {menus.map(menu => (
      <Link
        menu={menu}
      />
    ))}
  </Wrapper>
);

export default LinkList;
