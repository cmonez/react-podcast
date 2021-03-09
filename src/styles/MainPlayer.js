import React, { useState, useEffect } from 'react';
import exampleData from '../example.js';
import styled from 'styled-components';

const MainPlayerDiv = styled.div`
  width: 100%;
  height: 40%;
  background-color: pink;
  display: flex;
  flex-direction: row;
`;

const SubSection = styled.div`
  width: 50%;
  background: orange;
`;

const HeaderImage = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  min-width: 100%;
  background-image: url(${exampleData[0].image});
`;

const MainPlayer = () => {
  const [player, setPlayer] = useState(exampleData[0]);

  return (
    <MainPlayerDiv>
      <SubSection>
        <HeaderImage></HeaderImage>
      </SubSection>
      <SubSection>pt 2</SubSection>
    </MainPlayerDiv>
  );
};
export default MainPlayer;
