import * as types from "./actionTypes";
import axios from "axios";

export const increment = () => {
  return { type: types.INCREMENT };
};

export const decrement = () => {
  return { type: types.DECREMENT };
};

export const fetchData = () => {
  return { type: types.FETCH_DATA };
};

export const getError = err => {
  return { type: types.GET_ERROR, payload: err };
};

export const getCat = () => dispatch => {
  dispatch(fetchData());
  axios
    .get("https://reqres.in/api/users?page=2")
    .then(res => {
      dispatch({ type: types.GET_CAT, payload: res.data.data });
    })
    .catch(err => {
      dispatch(getError(err));
    });
};
