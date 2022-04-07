import {LOGOUT_USER} from '../../types';

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT_USER,
  });
};
