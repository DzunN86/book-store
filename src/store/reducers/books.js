import {
  SET_BOOKS,
  LOADING_BOOK,
  SET_ERROR,
  REFRESH_BOOK,
  SET_DETAIL_BOOK,
  REMOVE_BOOK,
  SET_POP_BOOK,
  POP_BOOK_LOADING,
  POP_BOOK_ERROR,
} from '../types';

const initBookState = {
  books: [],
  booksPop: [],
  detailBook: {},
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
    case SET_POP_BOOK:
      return {
        ...state,
        booksPop: action.payload,
        isLoading: false,
        isRefreshing: false,
      };
    case SET_DETAIL_BOOK:
      return {
        ...state,
        detailBook: action.payload,
        isLoading: false,
        isRefreshing: false,
      };
    case LOADING_BOOK:
    case POP_BOOK_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_ERROR:
    case POP_BOOK_ERROR:
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
    case REMOVE_BOOK:
      return {
        ...state,
        books: [],
        booksPop: [],
        detailBook: {},
      };
    default:
      return state;
  }
};
