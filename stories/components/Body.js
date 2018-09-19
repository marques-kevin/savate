import "./../../src/styles/global.scss";
import theme from "./../../src/styles/mui";
import { MuiThemeProvider } from "@material-ui/core/styles";

import React from "react";

export default ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <body style={{ height: "100vh", width: "100%", display: "flex" }}>
      {children}
    </body>
  </MuiThemeProvider>
);
