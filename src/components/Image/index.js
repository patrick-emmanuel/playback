import styled from 'styled-components';

const Image = styled.img`
  width: ${props => props.width || '100%'};
  object-fit: cover;
  opacity: ${props => props.opacity || 1};
`;

export default Image;