import { createStore, compose, applyMiddleware } from "redux";
import root from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

const store = createStore(
  root,
  composeEnhancers(applyMiddleware(...middlewares))
);

export { store };
