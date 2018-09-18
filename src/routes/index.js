import React from "react";
import Challenge from "./Challenge/Challenge";
import { Provider } from "react-redux";
import createStore from "./../stores";

const store = createStore();

export default (
  <Provider store={store}>
    <Challenge />
  </Provider>
);
