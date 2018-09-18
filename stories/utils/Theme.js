import React from "react";
import { ThemeProvider } from 'emotion-theming'
import theme from "./../../src/styles/themes/default";

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
