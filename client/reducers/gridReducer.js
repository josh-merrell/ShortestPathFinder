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
              placeStart: !state.placeStart
          };

        case types.FLIP_WALL_STATE:
          const id = action.payload.id;
          const rows = state.grid.board;

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
            return grid ? {...state, grid} : {...state}
          }
          return {...state}

        case types.DEST_PLACER:
            return {
                ...state,
                placeDest: !state.placeDest
            };

        case types.RESET_BOARD:
            state = defaultState();
            return {
                state
            }
        default: {
            return state;
        }
    }
};

export default gridReducer;
