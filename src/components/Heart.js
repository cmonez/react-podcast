import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const HeartDiv = styled.div`
  display: inline-block;
`;

const Heart = ({ podcastInfo, handleClick }) => {
  const [isShown, setIsShown] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  const favoritePodcast = (payload) => {
    axios
      .post('/create', payload)
      .then((response) => {
        console.log('Saved!');
      })
      .catch((err) => console.log('Error saving to database', err));
  };

  return (
    <HeartDiv
      onClick={(e) => {
        e.stopPropagation();
        console.log('Clicked div?');
        favoritePodcast(podcastInfo);
        setIsSaved(!isSaved);
      }}
      onMouseEnter={() => {
        console.log('enter');
        setIsShown(false);
      }}
      onMouseLeave={() => setIsShown(true)}
    >
      {isShown && !isSaved ? '♡' : '❤️'}
    </HeartDiv>
  );
};

export default Heart;
