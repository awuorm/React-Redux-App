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

//

const initialState = {
    fetchData: false,
    catFacts: [],
    fetchError: "",
}
 
