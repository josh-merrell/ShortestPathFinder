import React from 'react';


export default function Buttons(props) {
    return(
        <div className='button-board'>
            <button className='place-walls-button'>Place Walls</button>
            <button className='place-start-button'>Place Start</button>
            <button className='place-dest-button'>Place Dest</button>
            <button className='start-button'>START</button>
            <button className='reset-button'>Reset Board</button>
        </div>

    )
}