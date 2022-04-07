import {combineReducers} from 'redux';

import {authReducer} from './auth';
import {globalReducer} from './global';
import {bookReducer} from './books';

const reducers = combineReducers({
  authReducer,
  globalReducer,
  bookReducer,
});

export default reducers;
