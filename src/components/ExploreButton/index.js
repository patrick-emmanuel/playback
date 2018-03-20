import React from 'react';
import StyledButton from './StyledButton';
import {Link} from 'react-router-dom';

const ExploreButton = () => (
  <div>
    <Link to="/home">
      <StyledButton>Explore</StyledButton>
    </Link>
  </div>
);

export default ExploreButton;
