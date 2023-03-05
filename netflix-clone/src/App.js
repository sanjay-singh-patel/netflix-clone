import React from 'react';
import './App.css';
import Row from './Rows';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1> Netflix</h1>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      

    </div>
  );
}

export default App;
