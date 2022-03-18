import React from 'react';
import Node from './Node.jsx';

const Row = (props) => {

    const nodes = [];

    for (let i = 1; i <= props.sideLength; i++) {
        const nodeID = `${props.rowID}-${i}`
        const node = (
            <Node
                key={i}
                nodeID = {nodeID}
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