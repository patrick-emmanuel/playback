import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
  margin-top: 70px;
`;

const ExploreButton = () => (
  <Wrapper>
    <Link to="/explore">
      <StyledButton>Explore</StyledButton>
    </Link>
  </Wrapper>
);

export default ExploreButton;
