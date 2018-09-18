import React, { PureComponent } from "react";
import Style from "./NavBar.scss";
import Icon from "./components/Icon/Icon";

export default class NavBar extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <Icon name="Classement" />
        <Icon name="Framedata" />
        <Icon name="Defi" active />
        <Icon name="Notifications" />
        <Icon name="Profil" />
      </div>
    );
  }
}

NavBar.propTypes = {};
