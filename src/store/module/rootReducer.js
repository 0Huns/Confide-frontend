import { combineReducers } from "redux";
import tokenModule from "./tokenModule";
import themeModule from "./themeModule";

const rootReducer = combineReducers({
  tokenModule,
  themeModule,
});

export default rootReducer;
