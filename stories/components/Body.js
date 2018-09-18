import "./../../src/styles/global.scss";

import React from "react";

export default ({ children }) => (
  <body style={{ height: "100vh", width: "100%", display: "flex" }}>
    {children}
  </body>
);
