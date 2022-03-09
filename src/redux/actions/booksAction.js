import { getBooksApi, getCategoriesApi } from "../../Api";
import { dispatch } from "../store";
import { SET_CATEGORIES, ADD_BOOKS, SET_ERROR, SET_LOADING } from "../types";
import { setError, setLoading } from "./categoriesAction";

export const addBooksRedux = async (category) => {
  setError(false);
  let data = await getBooksApi(category);

  if (data.success)
    dispatch({
      type: ADD_BOOKS,
      payload: data.data,
    });
  else setError(true);
  setLoading(false);
};
