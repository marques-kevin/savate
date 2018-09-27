import React from "react";
import FullPageLoader from "./../src/components/FullPageLoader/FullPageLoader";
import Body from "./components/Body";

export default (storiesOf, addons) => {
  storiesOf("FullPageLoader", module)
    .add("En chargement", () => (
      <Body>
        <FullPageLoader loading />
      </Body>
    ))
    .add("Sans chargement", () => (
      <Body>
        <FullPageLoader />
      </Body>
    ));
};
