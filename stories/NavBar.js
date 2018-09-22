import React from "react";
import NavBar from "./../src/components/NavBar/NavBar";
import Body from "./components/Body";

export default (storiesOf, addons) => {
  storiesOf("NavBar", module).add("La barre de recherche", () => (
    <Body>
      <div style={{ marginTop: "auto", width: "100%" }}>
        <NavBar />
      </div>
    </Body>
  ));
};
