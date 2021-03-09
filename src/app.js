import React, { useState, useEffect, Fragment } from 'react';
import exampleData from './example.js';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalstyles';
import Container from './styles/MainContainer';
import MainPlayer from './styles/MainPlayer';
import PlayItem from './styles/PlayItem';
const App = () => {
  const firstPlay = exampleData[0];
  const [feed, setFeed] = useState(firstPlay);
  return (
    <Fragment>
      <GlobalStyle />
      <h2>React Podcasts</h2>
      <Container>
        <MainPlayer />
        <PlayItem />
      </Container>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
