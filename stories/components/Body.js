import React from "react";
import Global from "./../../src/styles";

export default ({ children }) => (
  <Global style={{ height: "100vh", width: "100%", display: "flex" }}>
    {children}
  </Global>
);
