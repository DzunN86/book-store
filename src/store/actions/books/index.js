import Axios from '../../../services/axios';
import {showMessage} from '../../../utils';

import {SET_BOOKS, LOADING_BOOK, SET_ERROR, REFRESH_BOOK} from '../../types';

export const saveBookPopular = data => ({
  type: SET_BOOKS,
  payload: data,
});
export const refreshBook = () => ({
  type: REFRESH_BOOK,
});

export const fetchBook = () => async dispatch => {
  dispatch({type: LOADING_BOOK});
  try {
    await Axios.get('/books').then(res => {
      dispatch(saveBookPopular(res.data.results));
    });
  } catch (error) {
    dispatch({type: SET_ERROR, payload: error.message});
    showMessage(
      error?.response
        ? error?.response?.data?.message
        : 'Something went wrong, try agin',
    );
    console.log(error);
  }
};
