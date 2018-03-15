import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

const LoginButton = () => (
  <Wrapper>
    <StyledButton>Explore</StyledButton>
  </Wrapper>
);

export default LoginButton;
