import styled from 'styled-components';
import { NavLink } from 'reactstrap';

const StyledNavLink = styled(NavLink)`
  color: white;
  font-weight: bold;
  font-family: 'Oxygen', serif;
  font-size: 15px;
  &:hover {
    color: #00EB5F;
  }
`;

export default StyledNavLink;
