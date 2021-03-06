import * as types from '../constants/actionTypes';

export const wallPlacer = () => ({
    type: types.WALL_PLACER,
    payload:'hi'
});

export const startPlacer = () => ({
    type: types.START_PLACER,
    payload: ''
});

export const destPlacer = () => ({
    type: types.DEST_PLACER,
    payload: ''
});

export const flipWallState = () => ({
    type: types.FLIP_WALL_STATE,
    payload: ''
});


export const resetBoard = () => ({
    type: types.RESET_BOARD,
    payload: ''
});

export const findPath = () => ({
    type: types.FIND_PATH,
    payload: ''
});