import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function Buttons(props) {
    const state = useSelector((state) => state.gridReducer);
    const grid = state.grid;
    const dispatch = useDispatch()

    console.log(`startPlacer: ${state.placeStart}`)
    console.log(`wallPlacer: ${state.placeWalls}`)

    const wallPlacerClasses = (state.placeStart || state.placeDest || state.grid.start.length > 0) ? 'place-walls-button-disabled' : 'place-walls-button';
    const startPlacerClasses = (grid.dest.length > 0 || grid.start.length > 0) ? 'place-start-button-disabled' : 'place-start-button';
    const destPlacerClasses = (grid.dest.length > 0) ? 'place-dest-button-disabled' : 'place-dest-button';
    const startButtonClasses = (grid.start.length > 0 && grid.dest.length > 0) ? 'start-button' : 'start-button-disabled';
    const resetButtonClasses = (grid.start.length > 0 || grid.dest.length > 0) ? 'reset-button' : 'reset-button';

    return(
        <div className='button-board'>
            <button onClick={() => dispatch({ type: 'Wall_Placer' })} className={wallPlacerClasses}>Place Walls</button>
            <button onClick={() => dispatch({ type: 'Start_Placer' })} className={startPlacerClasses}>Place Start</button>
            <button onClick={() => dispatch({ type: 'Dest_Placer' })} className={destPlacerClasses}>Place Dest</button>
            <button className={startButtonClasses}>START</button>
            <button onClick={() => dispatch({ type: 'Reset_Board' })}className={resetButtonClasses}>Reset Board</button>
        </div>

    )
}