import React from 'react';
import Row from './Row.jsx';

const Grid = (props) => {

  const rows = [];

  for (let i = 1; i <= props.sideLength; i++) {
    const row = (
        <Row
           key = {i}
           rowID = {i}
           className = 'row'
           sideLength = {props.sideLength}
        />
    );
    rows.push(row);
  }  
  return (
      <div className='grid'>
          {rows}
      </div>
  );
};

export default Grid;