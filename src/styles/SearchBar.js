import React, { useState } from 'react';

const SearchBar = ({ search }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form>
      <label>
        Search:
        <input type="text" onChange={onChangeHandler} value={searchTerm} />
      </label>
      <input
        type="submit"
        value="Submit"
        onClick={(e) => {
          e.preventDefault();
          console.log('Click?');
          search(searchTerm);
        }}
      />
    </form>
  );
};

export default SearchBar;
