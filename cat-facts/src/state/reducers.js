import * as types from "./actionTypes";

const initialCount = 0;
export const countReducer = (state = initialCount, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

//slices of state
const initialCat = {
  fetchData: false,
  catFacts: [],
  fetchError: ""
};

export const catReducer = (state = initialCat, action) => {
  switch (action.type) {
    case types.FETCH_DATA:
      return { ...state, fetchData: true, fetchError: "" };
    case types.GET_CAT:
      return { ...state, catFacts: action.payload, fetchError: "" };
      case types.GET_ERROR:
          return {...state, fetchError: action.payload};
    default:
      return state;
  }
};
