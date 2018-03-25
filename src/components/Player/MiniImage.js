import styled from 'styled-components';

const MiniImage = styled.img`
  width: 100px;
  opacity: ${props => (props.mouseIn ? '1' : '0')};
  z-index: 99999;
  position: absolute;
  transition: all 0.5s;
`;

export default MiniImage;
