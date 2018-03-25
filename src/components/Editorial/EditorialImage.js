import styled from 'styled-components';
import Image from '../Image';

const EditorialImage = Image.extend`
  &:hover {
    opacity: 0.5;
  }
`;

export default EditorialImage;
