import "./../../src/styles/global.scss";

import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import createStore from "./../../src/redux/stores";
import { Provider } from "react-redux";
import theme from "./../../src/styles/mui";

const store = createStore();

export default ({ children, noStyle }) => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <body
        style={
          noStyle ? {} : { height: "100vh", width: "100%", display: "flex" }
        }
      >
        {children}
      </body>
    </Provider>
  </MuiThemeProvider>
);
