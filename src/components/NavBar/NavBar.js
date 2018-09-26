import React, { PureComponent } from "react";
import Style from "./NavBar.scss";
import Icon from "./components/Icon/Icon";
import Connect from "./containers/NavBar.container";

class NavBar extends PureComponent {
  isActive(path, exact = false) {
    if (exact) return this.props.pathname === path;
    return this.props.pathname.includes(path);
  }

  render() {
    return (
      <div className={Style.container}>
        <Icon
          name="Classement"
          onClick={() => this.props.onClick("/ranking")}
          active={this.isActive("ranking")}
        />
        {/* <Icon
          name="Framedata"
          onClick={() => this.props.onClick("/framedata")}
          active={this.isActive("framedata")}
        /> */}
        <Icon
          name="Defi"
          onClick={() => this.props.onClick("/challenge")}
          active={this.isActive("challenge") || this.isActive("/", true)}
        />
        <Icon
          name="Notifications"
          snippet={this.props.hasNotifications}
          onClick={() => this.props.onClick("/notifications")}
          active={this.isActive("notifications")}
        />
        <Icon
          name="Profil"
          onClick={() => this.props.onClick("/profile")}
          active={this.isActive("profil")}
        />
      </div>
    );
  }
}

NavBar.propTypes = {};
NavBar.defaultProps = {
  onClick: () => console.warn("default: NavBar.onClick")
};

export const Component = NavBar;
export default Connect(NavBar);
