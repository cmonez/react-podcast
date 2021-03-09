import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlayIcon from './PlayIcon';
import exampleData from '../example.js';

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

const PlayItem = ({ podcastInfo }) => {
  return (
    <ItemDiv>
      <Image src={podcastInfo.image} />
      <DesCriptionContainer>
        <div>{podcastInfo.title}</div>
        <div>{podcastInfo.content_text}</div>
      </DesCriptionContainer>
    </ItemDiv>
  );
};
export default PlayItem;
