import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form>
      <label>
        Search:
        <input
          type="text"
          name="search"
          onChange={onChangeHandler}
          value={searchTerm}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SearchBar;
