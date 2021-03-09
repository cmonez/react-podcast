import React, { useState } from 'react';
import styled from 'styled-components';

const HeartDiv = styled.div`
  display: inline-block;
`;

const Heart = () => {
  const [isShown, setIsShown] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <HeartDiv
      onMouseEnter={() => setIsShown(false)}
      onMouseLeave={() => setIsShown(true)}
      onClick={() => setIsSaved(!isSaved)}
    >
      {isShown && !isSaved ? '♡' : '❤️'}
    </HeartDiv>
  );
};

export default Heart;
