import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dijkstra from '../algorithms/dijkstra.js';


export default function Buttons(props) {
    const state = useSelector((state) => state.gridReducer);
    const grid = state.grid;
    const dispatch = useDispatch()

    const visualizeDijkstra = () => {
      dispatch({ type: 'Start_Running' })
      const visitedNodesInOrder = dijkstra(state.grid.board, state.grid.start, state.grid.dest);
      animateVisitedNodes(visitedNodesInOrder);
      animateShortestPath(visitedNodesInOrder.pop());
    }

    const animateVisitedNodes = (visitedNodesInOrder) => {
      for (let i = 0; i < visitedNodesInOrder.length; i++) {
          const visitedNode = visitedNodesInOrder[i];
          const actionObj = { type: 'Update_Node_to_Visited', payload: visitedNode };
          setTimeout(() => {dispatch(actionObj)}, 5 * i);
      }  
    }

    // const animateVisitedNodes = (visitedNodesInOrder) => {
    //     for (let i = 0; i <= visitedNodesInOrder.length; i++) {
    //         if (i === visitedNodesInOrder.length) {
    //             const finalNode = visitedNodesInOrder.pop();
    //             setTimeout(() => {
    //                 animateShortestPath(finalNode);
    //             }, 10 * i);
    //         }
    //         setTimeout(() => {
    //             const node = visitedNodesInOrder[i];
    //             document.getElementById(`${node.key}`).className = 'grid-square-visited';
    //         }, 10 * i);
    //     }
    // } 
      
 

    const animateShortestPath = (finalNode) => {
      if (finalNode.key !== grid.dest) return;
      const shortestPath = [];
      let currentNode = finalNode;
      while (currentNode.previousNode) {
        shortestPath.unshift(currentNode);
        currentNode = currentNode.previousNode;
      }
      for (let i = 0; i < shortestPath.length; i++) {
        const pathNode = shortestPath[i];
        const actionObj = { type: 'Add_Node_To_Path', payload: pathNode };
        setTimeout(() => {dispatch(actionObj)}, 1000 + (50 * i));
        // setTimeout(() => {
        // document.getElementById(`${pathNode.key}`).className = 'grid-square-path';
        // }, 50 * i);
      }
    }


    const wallPlacerClasses = state.placeWalls ? 'button-TRUE' : (state.placeStart || state.placeDest || state.grid.start.length > 0 || state.isRunning) ? 'place-walls-button-disabled' : 'place-walls-button';
    const startPlacerClasses = state.placeStart ? 'button-TRUE' : (grid.dest.length > 0 || grid.start.length > 0 || state.isRunning) ? 'place-start-button-disabled' : 'place-start-button';
    const destPlacerClasses = state.placeDest ? 'button-TRUE' : (grid.dest.length > 0 || state.isRunning) ? 'place-dest-button-disabled' : 'place-dest-button';
    const startButtonClasses = (grid.start.length > 0 && grid.dest.length > 0 && state.isRunning === false) ? 'start-button' : 'start-button-disabled';
    const resetButtonClasses = (grid.start.length > 0 || grid.dest.length > 0) ? 'reset-button' : 'reset-button';

    return(
        <div className='button-board'>
            <button onClick={() => dispatch({ type: 'Wall_Placer' })} className={wallPlacerClasses}>Place Walls</button>
            <button onClick={() => dispatch({ type: 'Start_Placer' })} className={startPlacerClasses}>Place Start</button>
            <button onClick={() => dispatch({ type: 'Dest_Placer' })} className={destPlacerClasses}>Place Dest</button>
            <button onClick={() => visualizeDijkstra()} className={startButtonClasses}>START</button>
            <button onClick={() => dispatch({ type: 'Reset_Board' })}className={resetButtonClasses}>Reset Board</button>
        </div>

    )
}