import {SET_LOADING} from '../types';

const initGlobalState = {
  isLoading: false,
};

export const globalReducer = (state = initGlobalState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
