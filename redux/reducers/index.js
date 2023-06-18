import { combineReducers } from "redux";
import { ProductReducers } from "./ProductReducers";

let reducers = combineReducers({
  ProductReducers: ProductReducers,
});

const rootReducers = (state, action) => {
  return reducers(state, action);
};

export default rootReducers;
