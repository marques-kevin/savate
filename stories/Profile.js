import React from "react";
import Profile from "./../src/components/Profile/Profile";
import Body from "./components/Body";

export default (storiesOf, addons) => {
  storiesOf("Profile", module)
  .add("La vue infos", () => (
    <Body>
      <Profile />
    </Body>
  ))
  .add("La vue statistiques", () => (
    <Body>
      <Profile tab="stats"/>
    </Body>
  ))
  .add("La vue amis", () => (
    <Body>
      <Profile tab="friends"/>
    </Body>
  ));
};
