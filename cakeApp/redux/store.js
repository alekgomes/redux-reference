import { createStore, combineReducers, applyMiddleware } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
