import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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
      <Link to='/api/' >
        <button type='button' class='mapsButtons' id='Load Map'>
            Load Map
        </button>
      </Link>
      <button id='Delete Map'>Delete Map</button>
      <input id='New Map Name' type="text" placeholder="map name"></input>
      <Link to='/api/maps' >
        <button type='button' class='mapsButtons' id='Save Map'>
          Save Map
        </button>
      </Link>
    </div>
  )
}


export default Maps;