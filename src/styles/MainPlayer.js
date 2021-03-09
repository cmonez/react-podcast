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

const MainPlayer = () => {
  const [player, setPlayer] = useState(exampleData[0]);
  const [audio, setAudio] = useState(exampleData[0].attachments[0].url);

  return (
    <MainPlayerDiv>
      <ImageSubSection>
        <Image src={exampleData[0].image} />
      </ImageSubSection>
      <SubSection>
        Now Playing:
        <h3>{exampleData[0].title}</h3>
        <p>{exampleData[0].content_text}</p>
        <audio
          controls
          src="https://play.podtrac.com/npr-510312/edge1.pod.npr.org/anon.npr-mp3/npr/codeswitch/2021/03/20210302_codeswitch_labregafinal.mp3?orgId=1&d=2533&p=510312&story=972522792&t=podcast&e=972522792&size=0&ft=pod&f=510312&awCollectionId=510312&awEpisodeId=972522792"
        ></audio>
      </SubSection>
    </MainPlayerDiv>
  );
};
export default MainPlayer;
