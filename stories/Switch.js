import React from "react";
import Switch from "./../src/components/Switch/Switch";
import Body from "./components/Body";

export default (storiesOf, addons) => {
  storiesOf("Switch", module).add("Le Switch sans bouton de retour", () => (
    <Body>
      <Switch />
    </Body>
  ));
};
