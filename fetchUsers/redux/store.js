import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import usersReducer from "./users/usersReducer";

const store = createStore(usersReducer, composeWithDevTools());

export default store