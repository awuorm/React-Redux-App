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

export const getError = (err) => {
  return { type: types.GET_ERROR, payload: err };
};

export const getCat = () => dispatch => {
  dispatch(fetchData());
  axios
    .get("https://reqres.in/api/users?page=2")
    .then(res => {
      console.log("Response from API", res.data.data);
      dispatch({ type: types.GET_CAT, payload: res.data.data});
    })
    .catch(err => {
      console.log("err from server", err);
      dispatch(getError(err));
    });
};

// export const getPokemon = () => dispatch => {
//     dispatch({ type: FETCH_POKEMON_START });
//     axios
//       .get('https://pokeapi.co/api/v2/pokemon/')
//       .then(res =>
//         dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data.results })
//       )
//       .catch(err => dispatch({ type: FETCH_POKEMON_FAIL, payload: err }));
//   };
