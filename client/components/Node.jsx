import React from 'react';

const Node = (props) => {

    return(
        <div className='node' id={props.nodeID}>
            <p className='node-text'>Node: {props.nodeID}</p>
        </div>
    )

}

export default Node;