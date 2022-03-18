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
 import MainDisplay from './containers/MainDisplay.jsx';
 
 class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <MainDisplay/>
      </div>
    );
  }
}
 
 export default App;
 