import Axios from '../../../services/axios';
import {showMessage} from '../../../utils';
import {LOADING_BOOK, SET_BOOKS, SET_DETAIL_BOOK, SET_ERROR} from '../../types';

export const saveBookPopular = data => ({
  type: SET_BOOKS,
  payload: data,
});
export const detailBook = data => ({
  type: SET_DETAIL_BOOK,
  payload: data,
});

// Get Book
export const fetchBook = () => async dispatch => {
  dispatch({type: LOADING_BOOK});
  try {
    await Axios.get('/books', {params: {limit: 6, page: 5}}).then(res => {
      dispatch(saveBookPopular(res.data.results));
    });
  } catch (err) {
    dispatch({type: SET_ERROR, payload: err.message});
    showMessage(err.message ? err.message : 'Something went wrong, try agin');
    console.log(err.message);
  }
};

// Get Detail Book
export const fetchDetailBook = id => async dispatch => {
  dispatch({type: LOADING_BOOK});
  try {
    await Axios.get(`/books/${id}`).then(res => {
      dispatch(detailBook(res.data));
    });
  } catch (err) {
    dispatch({type: SET_ERROR, payload: err.message});
    showMessage(err.message ? err.message : 'Something went wrong, try agin');
    console.log(err.message);
  }
};
