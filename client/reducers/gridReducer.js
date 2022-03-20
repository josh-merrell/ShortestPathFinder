import * as types from '../constants/actionTypes';
import { defaultState, gridUpdate }  from '../algorithms/tools.js'



const gridReducer = (state = defaultState(), action) => {
    
    switch (action.type) {
        case types.WALL_PLACER:
          return {
              ...state,
              placeWalls: !state.placeWalls
          }

        case types.START_PLACER:
          return {
              ...state,
              placeWalls: false,
              placeStart: !state.placeStart
          };

        case types.FLIP_WALL_STATE_MOUSE_DOWN:
          let id = action.payload.id;
          let rows = state.grid.board;

          if (state.placeWalls) {
            let grid;
            for (let row of rows) {
                for (let node of row) {
                    const key = node.key;
                    if (key === id) {
                        const isWall_changer = {'isWall': !JSON.parse(action.payload.iswall)};
                        grid = gridUpdate(id, isWall_changer, node, state.grid.board);
                    }
                }
            }
            return grid ? {...state, grid, mouseIsPressed: true} : {...state}
          }
          if (state.placeStart && state.grid.start.length === 0) {
            let grid;
            for (let row of rows) {
                for (let node of row) {
                    const key = node.key;
                    if (key === id) {
                        const isStart_changer = {'isStart': true};
                        grid = gridUpdate(id, isStart_changer, node, state.grid.board);
                    }
                }
            }
            return grid ? {...state, grid, placeStart: false,} : {...state}
          }
          return {...state}

        case types.FLIP_WALL_STATE_MOUSE_ENTER:
          id = action.payload.id;
          rows = state.grid.board;

          if (state.placeWalls && state.mouseIsPressed) {
            let grid;
            for (let row of rows) {
                for (let node of row) {
                    const key = node.key;
                    if (key === id) {
                        const isWall_changer = {'isWall': !JSON.parse(action.payload.iswall)};
                        grid = gridUpdate(id, isWall_changer, node, state.grid.board);
                    }
                }
            }
            return grid ? {...state, grid} : {...state}
          }
          return {...state}

        case types.FLIP_WALL_STATE_MOUSE_UP:
          return {...state, mouseIsPressed: false}
          
        case types.DEST_PLACER:
            return {
                ...state,
                placeWalls: false,
                placeDest: !state.placeDest
            };

        case types.RESET_BOARD:
            return defaultState();
        default: {
            return state;
        }
    }
};

export default gridReducer;
