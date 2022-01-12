import React from "react";
import { StateProvider } from "./StateProvider";

export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) => {
  return basket.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  if (action.type === "ADD_TO_BASKET") {
    return {
      ...state,
      basket: [...state.basket, action.payload],
    };
  }

  if (action.type === "REMOVE_FROM_BASKET") {
    const index = state.basket.findIndex(
      (basketItem) => basketItem.id === action.id
    );

    let newBasket = [...state.basket];

    if (index >= 0) {
      newBasket.splice(index, 1);
    } else {
      console.warn(`Can't remove product(id : ${action.id})`);
    }

    return { ...state, basket: newBasket };
  }

  return state;
};

export default reducer;
