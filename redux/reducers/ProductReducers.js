import { USERS } from "../../data/users";
import { UPDATE_PRODUCT } from "../actions";

const initialState = {
  products: [],
};

export const ProductReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      const product = action.payload;
      const item = {
        name: product.name,
        image: product.image,
        price: product.price,
        user: "favour",
        pfp: USERS[1].image,
      };
      return { products: [...state.products, item] };

    default:
      return state;
  }
};
