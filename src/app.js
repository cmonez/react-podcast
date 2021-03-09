import React, { useState, useEffect, Fragment } from 'react';
import exampleData from './example.js';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalstyles';

const App = () => {
  const [feed, setFeed] = useState(exampleData);
  return (
    <Fragment>
      <GlobalStyle />
      <h2>React Podcasts</h2>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
