import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';
import StyledLink from './StyledLink';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

const ExploreButton = () => (
  <Wrapper>
    <StyledButton>
      <StyledLink to="/explore">Explore</StyledLink>
    </StyledButton>
  </Wrapper>
);

export default ExploreButton;
