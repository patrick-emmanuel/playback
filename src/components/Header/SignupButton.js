import styled from 'styled-components';
import { NavLink } from 'reactstrap';

const SignupButton = styled(NavLink)`
  color: white;
  font-family: 'Oxygen', serif;
  font-size: 15px;
  background-color: #282531;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  width: 8em;
  text-align: center;
  &:hover {
    color: #00eb5f;
  }
`;

export default SignupButton;
