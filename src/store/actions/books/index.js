import Axios from '../../../services/axios';
import {showMessage} from '../../../utils';
import {
  LOADING_BOOK,
  POP_BOOK_ERROR,
  POP_BOOK_LOADING,
  SET_BOOKS,
  SET_DETAIL_BOOK,
  SET_ERROR,
  SET_POP_BOOK,
} from '../../types';

export const saveBookRecom = data => ({
  type: SET_BOOKS,
  payload: data,
});
export const saveBookPop = data => ({
  type: SET_POP_BOOK,
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
      dispatch(saveBookRecom(res.data.results));
    });
  } catch (err) {
    dispatch({type: SET_ERROR, payload: err.message});
    showMessage(err.message ? err.message : 'Something went wrong, try agin');
    console.log(err.message);
  }
};
export const fetchBookPop = () => async dispatch => {
  dispatch({type: POP_BOOK_LOADING});
  try {
    await Axios.get('/books', {params: {limit: 25, page: 1}}).then(res => {
      dispatch(saveBookPop(res.data.results));
    });
  } catch (err) {
    dispatch({type: POP_BOOK_ERROR, payload: err.message});
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
