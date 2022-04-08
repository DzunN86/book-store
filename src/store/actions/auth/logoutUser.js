import {LOGOUT_USER, REMOVE_BOOK} from '../../types';

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT_USER,
  });
  dispatch({
    type: REMOVE_BOOK,
  });
};
