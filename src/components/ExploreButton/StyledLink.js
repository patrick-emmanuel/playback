import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: white;
  &:hover{
    color: #422D2D;
    text-decoration: none;
  }
`;

export default StyledLink;
