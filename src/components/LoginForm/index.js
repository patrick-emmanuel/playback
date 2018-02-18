import React, { Component } from 'react';
import LoginInput from './LoginInput';
import StyledForm from './StyledForm';
import styled from 'styled-components';
import LoginButton from './LoginButton';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

const LoginForm = () => (
  <Wrapper>
    <StyledForm model="login">
      <LoginInput type="text" placeholder="Email"/>
      <LoginInput type="text" placeholder="Password"/>
      <LoginButton>Log In</LoginButton>
    </StyledForm>
  </Wrapper>
);

export default LoginForm;
