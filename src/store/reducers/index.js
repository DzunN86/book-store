import {combineReducers} from 'redux';

import {authReducer} from './auth';
import {globalReducer} from './global';

const reducers = combineReducers({
  authReducer,
  globalReducer,
});

export default reducers;
