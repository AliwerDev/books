import { ADD_BOOKS, SET_CATEGORIES, SET_ERROR, SET_LOADING } from "../types";

const initialState = {
  books: {},
};

const booksReducer = (state = initialState, action) => {
  const ap = action.payload;
  switch (action.type) {
    case ADD_BOOKS:
      return { ...state, books: { ...state.books, [ap.id]: ap.data } };
    default:
      return state;
  }
};

export default booksReducer;
