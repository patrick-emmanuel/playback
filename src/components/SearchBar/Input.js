import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 38px;
  background: #bdb5b5;
  border: none;
  font-family: Ubuntu;
  padding-left: 20px;
  &:focus {
    outline-width: 0;
  }
`;

export default Input;