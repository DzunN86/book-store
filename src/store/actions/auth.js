import Axios from '../../services/axios';
import {showMessage} from '../../utils';
import {SET_PROFILE, SET_TOKEN} from '../types';
import {setLoading} from './global';

export const setToken = value => ({
  type: SET_TOKEN,
  payload: value,
});

export const setProfile = value => ({
  type: SET_PROFILE,
  payload: value,
});

export const loginAction = (form, navigation) => async dispatch => {
  try {
    dispatch(setLoading(true));
    await Axios.post('/auth/login', form).then(res => {
      dispatch(setToken(res.data.tokens.access.token));
      dispatch(setProfile(res.data.user));
      dispatch(setLoading(false));
      navigation.reset({index: 0, routes: [{name: 'HomeScreen'}]});
    });
  } catch (error) {
    dispatch(setLoading(false));
    showMessage(error?.response?.data?.message);
    console.log(error);
  }
};
