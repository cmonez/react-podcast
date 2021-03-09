import React, { useState, useEffect } from 'react';
import exampleData from '../example.js';
import styled from 'styled-components';

const ItemDiv = styled.div`
  width: 100%;
  height: 20%;
  background: white;
`;

const PlayItem = () => {
  const [player, setPlayer] = useState(exampleData[1]);
  const [audio, setAudio] = useState(exampleData[0].attachments[0].url);

  return <ItemDiv>Hello</ItemDiv>;
};
export default PlayItem;
