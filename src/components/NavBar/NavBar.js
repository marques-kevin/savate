import React, { PureComponent } from "react";
import { Container } from "./NavBar.style";
import Icon from "./components/Icon/Icon";

export default class NavBar extends PureComponent {
  render() {
    return (
      <Container>
        <Icon name="Classement" active />
        <Icon name="Framedata" />
        <Icon name="Defi" />
        <Icon name="Notifications" />
        <Icon name="Profil" />
      </Container>
    );
  }
}

NavBar.propTypes = {};
