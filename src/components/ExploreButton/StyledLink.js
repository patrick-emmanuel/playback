import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: white;
  text-transform: uppercase;
  font-size: 15px;
  &:hover{
    color: #422D2D;
    text-decoration: none;
  }
`;

export default StyledLink;
