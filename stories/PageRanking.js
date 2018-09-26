import React from "react";
import { Component as PageRanking } from "./../src/components/PageRanking/PageRanking";
import UserItem from "./../src/components/PageRanking/components/UserItem/UserItem";
import FirstUser from "./../src/components/PageRanking/components/FirstUser/FirstUser";
import Body from "./components/Body";

export default (storiesOf, addons) => {
  storiesOf("PageRanking", module).add("La vue de l'utilisateur", () => (
    <Body noStyle>
      <FirstUser username="Marques" ranking={3000} character="Talim" />
      {Array.from(new Array(100)).map((e, index) => (
        <UserItem
          key={index}
          username="Marques"
          ranking={3000}
          character="Talim"
          position={index + 2}
        />
      ))}
    </Body>
  ));
};
