import React from 'react';

const PlayIcon = ({ height, width, podcastInfo, handleClick }) => {
  return (
    <svg
      onClick={() => {
        // Change podcast
        handleClick(podcastInfo);
        console.log('Clicked?');
      }}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      width={height}
      height={width}
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
    >
      <path d="M256 0C114.833 0 0 114.844 0 256s114.833 256 256 256 256-114.844 256-256S397.167 0 256 0zm0 490.667C126.604 490.667 21.333 385.396 21.333 256S126.604 21.333 256 21.333 490.667 126.604 490.667 256 385.396 490.667 256 490.667z"></path>
      <path d="M357.771 247.031l-149.333-96c-3.271-2.135-7.5-2.25-10.875-.396A10.653 10.653 0 00192 160v192c0 3.906 2.125 7.49 5.563 9.365a10.68 10.68 0 005.104 1.302c2 0 4.021-.563 5.771-1.698l149.333-96c3.042-1.958 4.896-5.344 4.896-8.969s-1.854-7.01-4.896-8.969zm-144.438 85.427V179.542L332.271 256l-118.938 76.458z"></path>
    </svg>
  );
};

export default PlayIcon;
