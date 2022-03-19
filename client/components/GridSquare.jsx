import React from 'react';




const GridSquare = (props) => {
    const classes = 'grid-square node-color-${props.color}'
    return <div className={classes} />
}



export default GridSquare;