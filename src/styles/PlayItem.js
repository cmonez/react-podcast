import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlayIcon from './PlayIcon';
import exampleData from '../example.js';
import Heart from './Heart';
const ItemDiv = styled.div`
  width: 100%;
  margin-top: 10px;
  height: 150px;
  background: white;
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  width: 120px;
  border-radius: 50%;
`;

const DesCriptionContainer = styled.div`
  font-size: 12px;
`;

const PlayItem = ({ podcastInfo, changePodcast }) => {
  return (
    <ItemDiv>
      <Image src={podcastInfo.image} />
      <DesCriptionContainer>
        <div>{podcastInfo.title}</div>
        <div>{podcastInfo.content_text}</div>
        <Heart podcastInfo={podcastInfo} />
        <PlayIcon
          height={'50px'}
          width={'50px'}
          handleClick={changePodcast}
          podcastInfo={podcastInfo}
        />
      </DesCriptionContainer>
    </ItemDiv>
  );
};
export default PlayItem;
