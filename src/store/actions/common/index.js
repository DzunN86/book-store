import {SET_LOADING, SET_ONLINE} from '../../types';

export const setLoading = value => ({
  type: SET_LOADING,
  payload: value,
});

export const setOnline = value => ({
  type: SET_ONLINE,
  payload: value,
});
