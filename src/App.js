
import './App.css';

import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
  
    <div className="App">
        <BrowserRouter basename="comento-shop">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </BrowserRouter>
    </div>

  );
}

export default App;
