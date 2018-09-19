import React from "react";
import Login from "./../src/components/Login/Login";
import Body from "./components/Body";

export default (storiesOf, addons) => {
  storiesOf("Login", module).add("Le login", () => (
    <Body>
      <Login title="Framedata" />
    </Body>
  ));
};
