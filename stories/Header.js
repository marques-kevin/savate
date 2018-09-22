import React from "react";
import Header from "./../src/components/Header/Header";
import Body from "./components/Body";

export default (storiesOf, addons) => {
  storiesOf("Header", module)
    .add("Le header sans bouton de retour", () => (
      <Body>
        <Header title="Framedata" />
      </Body>
    ))
    .add("Le header avec le bouton de retour", () => (
      <Body>
        <Header title="Framedata" back />
      </Body>
    ));
};
