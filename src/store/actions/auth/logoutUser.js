import {LOGOUT_USER} from '../../types';

export const logout = navigation => dispatch => {
  dispatch({
    type: LOGOUT_USER,
  });
};
