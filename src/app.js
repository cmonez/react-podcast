import React, { useState, useEffect, Fragment } from 'react';
import exampleData from './example.js';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalstyles';
import Container from './styles/MainContainer';
import MainPlayer from './styles/MainPlayer';
import PlayItem from './styles/PlayItem';
import Footer from './styles/Footer';
import SearchBar from './styles/SearchBar';
import axios from 'axios';

const App = () => {
  const [feed, setFeed] = useState(exampleData);
  const [currentItem, setCurrentItem] = useState(exampleData[0]);

  const searchJSONFeed = (searchUrl) => {
    axios
      .get('/feed', {
        params: {
          url: searchUrl,
        },
      })
      .then(({ data }) => {
        setCurrentItem(data.data[0]);
        setFeed(data.data);
      })
      .catch((err) => {
        console.log('Error searching', err);
      });
  };

  return (
    <Fragment>
      <GlobalStyle />
      <h2>React Podcasts</h2>
      <Container>
        <SearchBar search={searchJSONFeed} />
        <MainPlayer currentItemPlaying={currentItem} />
        {feed.map((podcast) => {
          return (
            <PlayItem podcastInfo={podcast} changePodcast={setCurrentItem} />
          );
        })}
      </Container>
      <Footer />
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
