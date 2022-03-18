import React from 'react';
import { useState } from 'react';

const GridHeader = (props) => {

  const [newName, addNewName] = useState('');  

  return (
    <div className='gridheader' id='gridheader'>
        <label htmlFor='gridName'>Current Grid Name:</label>
        <span id='gridName'>{props.gridName}</span>
        <label htmlFor='updateGridName'>Update Grid Name:</label>
        <input 
          value={newName}
          onChange={(event) => addNewName(event.target.value)}
        />
        <button id="saveGrid" onClick={() => {
            props.onSaveGrid(newName);
        }}>
          Save Grid Config
        </button>
    </div>
  );
};

export default GridHeader;

