import "./../../src/styles/global.scss";

import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import theme from "./../../src/styles/mui";


export default ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <body style={{ height: "100vh", width: "100%", display: "flex" }}>
      {children}
    </body>
  </MuiThemeProvider>
);
