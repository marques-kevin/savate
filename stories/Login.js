import React from "react";
import { Component as Login } from "./../src/components/Login/Login";
import Body from "./components/Body";

export default (storiesOf, addons) => {
  storiesOf("Login", module)
    .add("Connexion", () => (
      <Body>
        <Login />
      </Body>
    ))
    .add("Connexion en mode chargement", () => (
      <Body>
        <Login fetching />
      </Body>
    ))
    .add("Création de compte", () => (
      <Body>
        <Login page="register" />
      </Body>
    ))
    .add("Mot de passe oublié", () => (
      <Body>
        <Login page="forgot" />
      </Body>
    ));
};
