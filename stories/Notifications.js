import React from "react";
import Notifications from "./../src/components/Notifications/Notifications";
import Body from "./components/Body";

export default (storiesOf, addons) => {
  storiesOf("Notifications", module)
  .add("La vue défis", () => (
    <Body>
      <Notifications />
    </Body>
  ))
  .add("La vue news", () => (
    <Body>
      <Notifications tab="news"/>
    </Body>
  ))
  .add("La vue demande d'amis", () => (
    <Body>
      <Notifications tab="friends"/>
    </Body>
  ));
};
