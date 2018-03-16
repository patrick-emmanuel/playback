import React from 'react';
import Input from './Input';
import InputWrapper from './InputWrapper';
import SearchIcon from './SearchIcon';

const SearchBar = ({ onSubmit }) => (
  <div>
    <form onSumbit={onSubmit}>
      <InputWrapper>
        <Input type="text" name="search" placeholder="Search" />
          <SearchIcon className="fas fa-search" name="search" />
      </InputWrapper>
    </form>
  </div>
);

export default SearchBar;
