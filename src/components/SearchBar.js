import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  margin-bottom: 10px;
`;

const FavoritesButton = styled.button``;

const SearchBar = ({ searchJSONFeed, grabFavoritePodcasts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchContainer>
      <form>
        <label>
          Search for a JSON feed!:
          <input type="text" onChange={onChangeHandler} value={searchTerm} />
        </label>
        <input
          type="submit"
          value="Submit"
          onClick={(e) => {
            e.preventDefault();
            console.log('Click?');
            searchJSONFeed(searchTerm);
          }}
        />
      </form>
      <FavoritesButton
        onClick={() => {
          grabFavoritePodcasts();
        }}
      >
        Grab Favorite Pods!
      </FavoritesButton>
    </SearchContainer>
  );
};

export default SearchBar;
