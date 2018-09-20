import React from "react";
import ChallengeResultItem from "./../src/components/ChallengeResultItem/ChallengeResultItem";
import Body from "./components/Body";

const user = {
  ranking: 2301,
  username: "Kayane",
  character: "Cervantes",
  score: 5
};

export default (storiesOf, addons) => {
  storiesOf("ChallengeResultItem", module).add("Le ChallengeResultItem", () => (
    <Body>
      <ChallengeResultItem user={user} challenger={user} />
    </Body>
  ));
};
