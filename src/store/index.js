import { createStore } from "redux";
import rootReducer from "./module/rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

let store = createStore(
  rootReducer,
  composeWithDevTools()
);

export default store;