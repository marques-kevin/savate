import React from "react";
import PageChallenge from "./../src/components/PageChallenge/PageChallenge";
import Body from "./components/Body";

export default (storiesOf, addons) => {
  storiesOf("PageChallenge", module)
  .add("La vue du résumé", () => (
    <Body>
      <PageChallenge />
    </Body>
  ))
  .add("La vue des stats", () => (
    <Body>
      <PageChallenge tab="history" />
    </Body>
  ))
};
