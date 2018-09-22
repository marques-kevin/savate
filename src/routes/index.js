import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ConnectedRouter } from "connected-react-router";

import theme from "./../styles/mui";
import createStore from "./../redux/stores";
import Challenge from "./../components/PageChallenges/PageChallenges";
import Profile from "./../components/Profile/Profile";
import Notifications from "./../components/Notifications/Notifications";
import Login from "./../components/Login/Login";
import NavBar from "./../components/NavBar/NavBar";

const store = createStore();

export default (
  <Router>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={store.history}>
          <div>
            <Route exact path="/" component={Challenge} />
            <Route exact path="/challenge" component={Challenge} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <NavBar />
          </div>
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>
  </Router>
);
