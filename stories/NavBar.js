import React from "react";
import NavBar from "./../src/components/NavBar/NavBar";
import Body from "./components/Body";
import Theme from "./utils/Theme";

export default (storiesOf, addons) => {
  storiesOf("NavBar", module).add("La barre de recherche", () => (
    <Theme>
      <Body>
        <div style={{ marginTop: "auto", width: "100%" }}>
          <NavBar />
        </div>
      </Body>
    </Theme>
  ));
};
