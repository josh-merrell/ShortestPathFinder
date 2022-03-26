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
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Shortest Path Finder</h1>
      </header>
      {/* <Router>
        <Route 
          path='/' 
          component ={  
          <div> */}
            <Buttons/>
            <GridBoard />
            <Maps/>
          {/* </div>
        }/>
      </Router> */}
    </div>
  )
}


export default App;
 