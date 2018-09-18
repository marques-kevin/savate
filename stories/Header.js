import React from "react";
import Header from "./../src/components/Header/Header";
import Body from "./components/Body";
import Theme from "./utils/Theme";

export default (storiesOf, addons) => {
  storiesOf("Header", module)
    .add("Le header sans bouton de retour", () => (
      <Theme>
        <Body>
          <Header title="Framedata" />
        </Body>
      </Theme>
    ))
    .add("Le header avec le bouton de retour", () => (
      <Theme>
        <Body>
          <Header title="Framedata" back />
        </Body>
      </Theme>
    ));
};
