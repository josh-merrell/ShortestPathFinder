import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GridSquare from './GridSquare.jsx';

const GridBoard = (props) => {

  const grid = useSelector((state) => state.gridReducer.grid);
  const rows = grid.board;
  const dispatch = useDispatch()
  const resultArr = useSelector((state) => state.resultArr);


  const gridSquares = [];
  for (let row of rows) {
    for (let node of row) {
      
      const id = `${node.r}-${node.c}`;
      const gridSquare = (
        <GridSquare 
          color='3' 
          id={`${node.r}-${node.c}`}
          visited={node.visited} 
          distThrough={node.distThrough} 
          isWall={node.isWall} 
          neighbors={node.neighbors}
          isStart={node.isStart}
          isDest={node.isDest}
          isVisited={node.isVisited}
          isInPath={node.isInPath}
        />
      )
      gridSquares.push(gridSquare);
    }
  }
  return (
    <div 
    className='grid-board'
    onMouseDown={(e) => dispatch(({ type: 'Mouse_Pressed_To_True' }))}
    onMouseUp={(e) => dispatch(({ type: 'Mouse_Pressed_To_False' }))}
    draggable="false"
    >
      {gridSquares}
    </div>
  );
};

export default GridBoard;