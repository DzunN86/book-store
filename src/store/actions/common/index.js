import {SET_LOADING} from '../../types';

export const setLoading = value => ({
  type: SET_LOADING,
  payload: value,
});
