import styled from 'styled-components';

const Heading = styled.div`
  flex: 3;
  padding-left: ${props => (props.mouseIn ? '110px' : '0px')};
  transition: all 0.3s;
`;

export default Heading;
