import styled from 'styled-components';

const Input = styled.input`
  width: 250px;
  height: 45px;
  background: #bdb5b5;
  border-radius: 10px;
  border: none;
  font-family: Ubuntu;
  padding-left: 20px;
  &:focus {
    outline-width: 0;
  }
`;

export default Input;