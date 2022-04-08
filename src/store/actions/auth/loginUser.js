import Axios from '../../../services/axios';
import {showMessage} from '../../../utils';
import {SET_PROFILE, SET_TOKEN} from '../../types';
import {setLoading} from '../common';

export const setToken = value => ({
  type: SET_TOKEN,
  payload: value,
});

export const setProfile = value => ({
  type: SET_PROFILE,
  payload: value,
});

export const loginAction = form => async dispatch => {
  dispatch(setLoading(true));
  try {
    await Axios.post('/auth/login', form).then(res => {
      dispatch(setToken(res.data.tokens.access.token));
      dispatch(setProfile(res.data.user));
      dispatch(setLoading(false));
    });
  } catch (err) {
    dispatch(setLoading(false));
    showMessage(err.message ? err.message : 'Something went wrong, try agin');
    console.log(err.message);
  }
};
