import React from 'react';
import Input from './Input';
import InputWrapper from './InputWrapper';
import SearchIcon from './SearchIcon';
import styled from 'styled-components';

const Wrapper = styled.div`
  order: 1;
  align-self: center;
  width: 90%;
`;
const SearchBar = ({ onSubmit }) => (
  <Wrapper>
    <form onSumbit={onSubmit}>
      <InputWrapper>
        <Input type="text" name="search" placeholder="Search" />
        <SearchIcon className="fas fa-search" name="search" />
      </InputWrapper>
    </form>
  </Wrapper>
);

export default SearchBar;
