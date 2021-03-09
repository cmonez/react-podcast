import React, { useState, useEffect, Fragment } from 'react';
import exampleData from './example.js';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalstyles';
import Container from './styles/MainContainer';
import MainPlayer from './styles/MainPlayer';
import PlayItem from './styles/PlayItem';
import Footer from './styles/Footer';

const App = () => {
  const [feed, setFeed] = useState(exampleData);
  const [currentItem, setCurrentItem] = useState(exampleData[0]);
  return (
    <Fragment>
      <GlobalStyle />
      <h2>React Podcasts</h2>
      <Container>
        <MainPlayer />
        {feed.map((podcast) => {
          return <PlayItem podcastInfo={podcast} />;
        })}
      </Container>
      <Footer />
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
