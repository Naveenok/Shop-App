import { ActionTypes } from "../constants/action-types";

const initiaState = {
  products: [],
};
export const productReducer = (state = initiaState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
