import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GridSquare from './GridSquare.jsx';

const GridBoard = (props) => {

  const grid = useSelector((state) => state.gridReducer.grid);
  const rows = grid.board;
  const dispatch = useDispatch()

  const gridSquares = [];
  for (let row of rows) {
    for (let node of row) {
      
      const id = `${node.r}-${node.c}`;
      const gridSquare = (
        <GridSquare 
          color='3' 
          id={`${node.r}-${node.c}`} 
          test={'YOOO'} 
          visited={node.visited} 
          distThrough={node.distThrough} 
          isWall={node.isWall} 
          neighbors={node.neighbors}
        />
      )
      gridSquares.push(gridSquare);
    }
  }


  // const grid = []

  // for (let row = 0; row < 19; row++) {
  //   grid.push([]);
  //   for (let col = 0; col <= 19; col++) {
  //     grid[row].push(<GridSquare key={`${row}${col}`} color='1'/>)
  //   }
  // }  
  return (
    <div className='grid-board'>
      {gridSquares}
    </div>
  );
};

export default GridBoard;