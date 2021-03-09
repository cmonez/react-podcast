import React, { useState, useEffect } from 'react';
import exampleData from '../example.js';
import styled from 'styled-components';

const ItemDiv = styled.div`
  width: 100%;
  margin-top: 10px;
  height: 20%;
  background: white;
  display: flex;
  flex-direction: row;
  border-top: solid black;
  /* border-bottom: solid black; */
`;

const picture = exampleData[1].image;

const HeaderImage = styled.div`
  width: 100px;
  height: 100%;
  background-image: url(${picture});
  border-radius: 50%;
`;

const PlayItem = () => {
  const [player, setPlayer] = useState(exampleData[1]);
  const [audio, setAudio] = useState(exampleData[0].attachments[0].url);

  return (
    <ItemDiv>
      <HeaderImage />
      <div>
        <div>{player.title}</div>
        <div>{player.content_text}</div>
      </div>
    </ItemDiv>
  );
};
export default PlayItem;
