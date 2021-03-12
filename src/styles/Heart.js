import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const HeartDiv = styled.div`
  display: inline-block;
`;

const Heart = ({ podcastInfo }) => {
  const [isShown, setIsShown] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  const favoritePodcast = () => {
    axios
      .post('/create', podcastInfo)
      .then((response) => {
        console.log('Saved!');
      })
      .catch((err) => console.log('Error saving to database', err));
  };

  return (
    <HeartDiv
      onClick={(e) => {
        e.stopPropagation();
        console.log('Clicked?');
        favoritePodcast();
      }}
      onMouseEnter={() => {
        console.log('enter'), favoritePodcast();
        setIsShown(false);
      }}
      onMouseLeave={() => setIsShown(true)}
      onClick={() => setIsSaved(!isSaved)}
    >
      {isShown && !isSaved ? '♡' : '❤️'}
    </HeartDiv>
  );
};

export default Heart;
