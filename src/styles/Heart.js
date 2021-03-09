import React, { useState } from 'react';

const Heart = () => {
  const [isShown, setIsShown] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsShown(false)}
      onMouseLeave={() => setIsShown(true)}
      onClick={() => setIsSaved(!isSaved)}
    >
      {isShown && !isSaved ? '♡' : '❤️'}
    </div>
  );
};

export default Heart;
