import modalReducers from "../Modals/modalReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  modals: modalReducers,
});

export default rootReducer;
