import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import categoriesReducer from "./Categories";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  books: booksReducer,
});

export default rootReducer;
