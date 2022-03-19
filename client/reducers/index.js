import { combineReducers } from 'redux';

import gridReducer from './gridReducer';

const reducers = combineReducers({
    gridReducer: gridReducer,
});

export default reducers;