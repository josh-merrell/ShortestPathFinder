import * as types from '../constants/actionTypes';
import defaultState from '../algorithms/tools.js'



const gridReducer = (state = defaultState(), action) => {

    switch (action.type) {
        case types.WALL_PLACER:
          placeWalls = !placeWals;
          return {
              ...state,
              placeWalls,
          };
        case types.START_PLACER:
          placeStart = !placeStart;
          return {
              ...state,
              placeStart,
          };
        case types.DEST_PLACER:
            placeDest = !placeDest;
            return {
                ...state,
                placeDest,
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
