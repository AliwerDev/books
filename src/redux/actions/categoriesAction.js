import { getCategoriesApi } from "../../Api";
import { dispatch } from "../store";
import { SET_CATEGORIES, SET_ERROR, SET_LOADING, SET_SEARCH } from "../types";

export const setLoading = (state) => {
  dispatch({ type: SET_LOADING, payload: state });
};

export const setError = (state) => {
  dispatch({ type: SET_ERROR, payload: state });
};

export const serching = (word) => {
  dispatch({ type: SET_SEARCH, payload: word });
};

export const getCategoriesRedux = async () => {
  setError(false);
  let data = await getCategoriesApi();

  if (data.success)
    dispatch({
      type: SET_CATEGORIES,
      payload: data.data,
    });
  else setError(true);
  setLoading(false);
};
