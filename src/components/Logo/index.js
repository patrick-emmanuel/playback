import React from 'react';
import StyledImage from './StyledImage';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div>
    <Link to="/">
      <StyledImage src={logo} />
    </Link>
  </div>
);

export default Logo;
