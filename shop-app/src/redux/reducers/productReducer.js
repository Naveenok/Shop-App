import { ActionTypes } from "../constants/action-types";

const initiaState = {
  products: [
    {
      id: 1,
      title: "Naveen",
      category: "programmer",
    },
  ],
};
export const productReducer = (state = initiaState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...initiaState.products, ...payload };
    default:
      return state;
  }
};
