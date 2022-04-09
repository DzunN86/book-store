import {SET_LOADING, SET_ONLINE} from '../types';

const initGlobalState = {
  isLoading: false,
  isOnline: true,
};

export const globalReducer = (state = initGlobalState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_ONLINE:
      return {
        ...state,
        isOnline: action.payload,
      };
    default:
      return state;
  }
};
