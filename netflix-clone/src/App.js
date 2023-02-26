import React from 'react';
import './App.css';
import Row from './Rows';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1> Netflix</h1>
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchURL={requests.fetchTrending}/>

    </div>
  );
}

export default App;
