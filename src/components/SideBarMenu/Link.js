import React from 'react';
import styled from 'styled-components';
import Icons from './Icons';

const Wrapper = styled.div`
  width: 100%;
  height: 45px;
  text-align: left;
  padding: 9px 20px;
  font-family: Ubuntu;
  font-size: 0.9em;
  cursor: pointer;
  &:hover {
    border-left: 5px solid #eb5959;
    background: #6e4e4e;
    transition: border 0.5s;
  }
`;

const Link = ({ menu }) => (
  <Wrapper>
    <Icons className={menu.iconClassName} iconName={menu.iconName} />
    <a>{menu.name}</a>
  </Wrapper>
);

export default Link;
