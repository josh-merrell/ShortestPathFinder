import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';




const GridSquare = (props) => {
    const dispatch = useDispatch();
    // const classes = 'grid-square node-color-${props.color}';
    const WallClass = props.isWall ? 'grid-square-wall' : props.isStart ? 'grid-square-start' : props.isDest ? 'grid-square-dest' : props.isInPath ? 'grid-square-path' : props.isVisited ? 'grid-square-visited' : 'grid-square node-color-${props.color}'

    return <div
    onMouseDown={(e) => dispatch({ type: 'Flip_Wall_State_Mouse_Down', payload: {id: e.target.dataset.id, iswall: e.target.dataset.iswall}})}
    onMouseUp={(e) => dispatch({ type: 'Flip_Wall_State_Mouse_Up', payload: {id: e.target.dataset.id, iswall: e.target.dataset.iswall}})}
    onMouseEnter={(e) => dispatch({ type: 'Flip_Wall_State_Mouse_Enter', payload: {id: e.target.dataset.id, iswall: e.target.dataset.iswall}})}
    data-iswall={props.isWall} 
    data-distthrough={props.distThrough} 
    data-id={props.id} 
    className={WallClass}
    draggable="false" 
    />
}



export default GridSquare;
