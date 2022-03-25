import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Maps = () => {

  const mapArr = useSelector((state) => state.gridReducer.storedMaps);



  const getMap = () => {
      //check new map name input, return 'map name required' if empty
      //build request body
      //fetch, method: GET, headers: {'Content-Type': 'Applciation/JSON'}, body: 
  }
  
  
  
  return (
    <div className="mapBar" >
      <select id='availableMaps' name='maps'>
          {/* option for each el in stored array of maps */}
      </select>
      <button id='Load Map'>Load Map</button>
      <button id='Delete Map'>Delete Map</button>
      <input id='New Map Name' type="text" placeholder="map name"></input>
      <button id='Save Map'>Save Map</button>
    </div>
  )
}


export default Maps;