import { SET_CATEGORIES, SET_ERROR, SET_LOADING, SET_SEARCH } from "../types";

const initialState = {
  categories: [],
  loading: false,
  error: false,
  search: "",
};

const categoriesReducer = (state = initialState, action) => {
  const ap = action.payload;
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
