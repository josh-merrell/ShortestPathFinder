import React from 'react';
import Node from './Node.jsx';


const Row = (props) => {

    function genLocalNeighbors(rowID, node, sideLength) {
      const localNeigh = [];
      if (rowID - 1 > 0) {
        for (let n = node - 1; n <= node + 1; n++) {
          if (n > 0 && n <= sideLength) {
              localNeigh.push(`${rowID - 1}-${n}`);
          }
        }
      }
      if (rowID + 1 <= sideLength) {
        for (let n = node - 1; n <= node + 1; n++) {
            if (n > 0 && n <= sideLength) {
                localNeigh.push(`${rowID + 1}-${n}`);
            }
          }         
      }
      if (node - 1 > 0) localNeigh.push(`${rowID}-${node-1}`);
      if (node + 1 <= sideLength) localNeigh.push(`${rowID}-${node+1}`);
      return localNeigh;
    };

    const nodes = [];

    for (let i = 1; i <= props.sideLength; i++) {
        const nodeID = `${props.rowID}-${i}`;
        
        const localNeighbors = genLocalNeighbors(props.rowID, i, props.sideLength);

        const node = (
            <Node
                key={i}
                nodeID = {nodeID}
                localNeighbors = {localNeighbors}
            />
        );
        nodes.push(node);
    }

    return (
        <div className='row'>
            {nodes}
        </div>
    );
};

export default Row;