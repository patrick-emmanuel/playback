import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

const LoginButton = ({ handleLogin }) => (
  <Wrapper>
    <StyledButton onClick={handleLogin}>Log In</StyledButton>
  </Wrapper>
);

export default LoginButton;
