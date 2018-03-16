import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #3b2a2a;
  text-align: left;
  padding: 9px 20px;
  font-family: Ubuntu;
  &:hover {
    border-left: 5px solid #eb5959;
    background: #6E4E4E;
    transition: border .5s;
  }
`;

const Link = ({ menu }) => (
  <Wrapper>
    <a>{menu}</a>
  </Wrapper>
);

export default Link;
