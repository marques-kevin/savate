import React from "react";
import Switch from "./../src/components/Switch/Switch";
import Body from "./components/Body";
import Theme from "./utils/Theme";

export default (storiesOf, addons) => {
  storiesOf("Switch", module)
    .add("Le Switch sans bouton de retour", () => (
      <Theme>
        <Body>
          <Switch />
        </Body>
      </Theme>
    ));
};
