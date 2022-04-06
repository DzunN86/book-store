import {SET_TOKEN, SET_PROFILE, LOGOUT_USER} from '../types';

const initAuthState = {
  token: null,
  profile: null,
};

export const authReducer = (state = initAuthState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
