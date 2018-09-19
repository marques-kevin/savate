import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./../styles/mui";
import createStore from "./../redux/stores";
import Challenge from "./Challenge/Challenge";
import Profile from "./Profile/Profile";
import Login from "./../components/Login/Login";
import NavBar from "./../components/NavBar/NavBar";

const store = createStore();

export default (
  <Router>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <div>
          <Route exact path="/" component={Challenge} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <NavBar />
        </div>
      </Provider>
    </MuiThemeProvider>
  </Router>
);
