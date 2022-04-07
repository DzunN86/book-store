import {SET_BOOKS, LOADING_BOOK, SET_ERROR, REFRESH_BOOK} from '../types';

const initBookState = {
  books: [],
  isLoading: false,
  ErrorMessage: null,
  isRefreshing: false,
};

export const bookReducer = (state = initBookState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload,
        isLoading: false,
        isRefreshing: false,
      };
    case LOADING_BOOK:
      return {
        ...state,
        isLoading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        isRefreshing: false,
        isLoading: false,
        ErrorMessage: action.payload,
      };
    case REFRESH_BOOK:
      return {
        ...state,
        isRefreshing: true,
      };
    default:
      return state;
  }
};
