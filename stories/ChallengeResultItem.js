import React from "react";
import ChallengeResultItem from "./../src/components/ChallengeResultItem/ChallengeResultItem";
import Body from "./components/Body";

export default (storiesOf, addons) => {
  storiesOf("ChallengeResultItem", module).add("Le ChallengeResultItem", () => (
    <Body>
      <ChallengeResultItem />
    </Body>
  ));
};
