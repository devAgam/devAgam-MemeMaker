import rootReducer from "../utils/rootReducer.js";
import { createStore } from "redux";

export const configureStore = () => {
  const store = createStore(rootReducer);

  return store;
};
