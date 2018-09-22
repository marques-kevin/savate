import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

import rootReducer from "../reducers";
import Amplitude, { reduxMiddleware } from "./../../utils/amplitude";

const history = createBrowserHistory();

const enhancer = compose(
  applyMiddleware(routerMiddleware(history), reduxMiddleware(Amplitude), thunk),
  process.env.NODE_ENV === "test"
    ? compose
    : process.env.NODE_ENV !== "production" &&
      window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : compose
);

export default function configureStore(initialState) {
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    enhancer
  );
  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  store.history = history;

  return store;
}
