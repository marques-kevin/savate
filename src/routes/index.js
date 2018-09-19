import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createStore from "./../stores";
import Challenge from "./Challenge/Challenge";
import Profile from "./Profile/Profile";
import NavBar from "./../components/NavBar/NavBar";

const store = createStore();

export default (
  <Router>
    <Provider store={store}>
      <div>
        <Route exact path="/" component={Challenge} />
        <Route exact path="/profile" component={Profile} />
        <NavBar />
      </div>
    </Provider>
  </Router>
);
