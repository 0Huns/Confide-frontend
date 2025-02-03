import { combineReducers } from "redux";
import tokenModule from "./tokenModule";
import themeModule from "./themeModule";
import fetchModule from "./fetchModule";

const rootReducer = combineReducers({
  tokenModule,
  themeModule,
  fetchModule,
});

export default rootReducer;
