import { applyMiddleware, createStore } from "redux";
import userReducer from "./user/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
