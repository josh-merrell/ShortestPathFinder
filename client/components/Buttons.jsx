import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function Buttons(props) {
    const grid = useSelector((state) => state.gridReducer.grid);
    
    const dispatch = useDispatch()

    console.log(`start-length: ${grid.start.length}`)

    const wallPlacerClasses = (grid.start.length > 0 && grid.dest.length > 0) ? 'place-walls-button' : 'place-walls-button-disabled';
    const startPlacerClasses = (grid.dest.length > 0) ? 'place-start-button-disabled' : 'place-start-button';
    const destPlacerClasses = (grid.dest.length > 0) ? 'place-dest-button-disabled' : 'place-dest-button';
    const startButtonClasses = (grid.start.length > 0 && grid.dest.length > 0) ? 'start-button' : 'start-button-disabled';
    const resetButtonClasses = (grid.start.length > 0 || grid.dest.length > 0) ? 'reset-button' : 'reset-button-disabled';

    return(
        <div className='button-board'>
            <button onClick={() => dispatch({ type: 'Wall_Placer' })} className={wallPlacerClasses}>Place Walls</button>
            <button onClick={() => dispatch({ type: 'Start_Placer' })} className={startPlacerClasses}>Place Start</button>
            <button onClick={() => dispatch({ type: 'Dest_Placer' })} className={destPlacerClasses}>Place Dest</button>
            <button className={startButtonClasses}>START</button>
            <button className={resetButtonClasses}>Reset Board</button>
        </div>

    )
}