/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { Component } from 'react';
import Buttons from './components/Buttons.jsx';
import GridBoard from './components/GridBoard.jsx';
import Maps from './components/Maps.jsx';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Shortest Path Finder</h1>
      </header>
      <Buttons/>
      <GridBoard />
      <Maps/>
    </div>
  )
}


export default App;
 