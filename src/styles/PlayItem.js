import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlayIcon from './PlayIcon';
import exampleData from '../example.js';

const ItemDiv = styled.div`
  width: 100%;
  margin-top: 10px;
  height: 20%;
  background: white;
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  width: 100px;
  border-radius: 50%;
`;

const PlayItem = () => {
  const [player, setPlayer] = useState(exampleData[1]);
  const [audio, setAudio] = useState(exampleData[0].attachments[0].url);

  return (
    <ItemDiv>
      <Image src={exampleData[1].image} />
      <div>
        <div>{player.title}</div>
        <div>{player.content_text}</div>
      </div>
    </ItemDiv>
  );
};
export default PlayItem;
