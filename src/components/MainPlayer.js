import React, { useState, useEffect } from 'react';
import exampleData from '../example.js';
import styled from 'styled-components';

const MainPlayerDiv = styled.div`
  width: 100%;
  height: 50%;
  background-color: pink;
  display: flex;
  flex-direction: row;
`;

const SubSection = styled.div`
  width: 50%;
  background: #bfb1c1;
  overflow: auto;
`;
const ImageSubSection = styled.div`
  width: 50%;
  background: #bfb1c1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

const Image = styled.img`
  width: 90%;
`;

const MainPlayer = ({ currentItemPlaying }) => {
  return (
    <MainPlayerDiv>
      <ImageSubSection>
        <Image src={currentItemPlaying.image} />
      </ImageSubSection>
      <SubSection>
        Now Playing:
        <h3>{currentItemPlaying.title}</h3>
        <p>{currentItemPlaying.content_text}</p>
        <audio controls src={currentItemPlaying.attachments[0].url}></audio>
      </SubSection>
    </MainPlayerDiv>
  );
};
export default MainPlayer;
