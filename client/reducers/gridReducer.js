import * as types from '../constants/actionTypes';
import { defaultState, gridUpdate }  from '../algorithms/tools.js';



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

        case types.DEST_PLACER:
          return {
              ...state,
              placeDest: !state.placeDest
          };

        case types.MOUSE_PRESSED_TO_FALSE:
          return {
              ...state,
              mouseIsPressed: false
          }
        
        case types.MOUSE_PRESSED_TO_TRUE:
          return {
              ...state,
              mouseIsPressed: true
          }

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
                        grid = gridUpdate(id, isWall_changer, node, state.grid);
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
                        grid = gridUpdate(id, isStart_changer, node, state.grid);
                    }
                }
            }
            return grid ? {...state, grid, placeStart: false,} : {...state}
          }
          if (state.placeDest && state.grid.dest.length === 0) {
            let grid;
            for (let row of rows) {
                for (let node of row) {
                    const key = node.key;
                    if (key === id) {
                        const isDest_changer = {'isDest': true};
                        grid = gridUpdate(id, isDest_changer, node, state.grid);
                    }
                }
            }
            return grid ? {...state, grid, placeDest: false,} : {...state}
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
                        grid = gridUpdate(id, isWall_changer, node, state.grid);
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
        
        
        case types.START_RUNNING:
            return {...state, isRunning: true}

        case types.UPDATE_NODE_TO_VISITED:
            let grid;
            const isVisited_changer = {'isVisited': true};
            grid = gridUpdate(action.payload.key, isVisited_changer, action.payload, state.grid)
            return grid ? {...state, grid} : {...state}

            
        case types.ADD_NODE_TO_PATH:
            const isInPath_changer = {'isInPath': true};
            grid = gridUpdate(action.payload.key, isInPath_changer, action.payload, state.grid)
            return grid ? {...state, grid} : {...state}


        default: {
            return state;
        }


    }
};

export default gridReducer;
