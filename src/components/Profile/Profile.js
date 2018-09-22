import React, { Component } from "react";
import PropTypes from "prop-types";
import Style from "./Profile.scss";
import Header from "./../../components/Header/Header";
import SkinUser from "./../../components/SkinUser/SkinUser";
import Info from "./tabs/Info/Info";
import Stats from "./tabs/Stats/Stats";
import Friends from "./tabs/Friends/Friends";
import Tabs from "./../../components/Tabs/Tabs";

class Profile extends Component {
  getTabFromName(tab) {
    const tabs = ["info", "stats", "friends"];
    return tabs.findIndex(t => t === tab);
  }

  render() {
    return (
      <div className={Style.container}>
        <Header title="Profil" noBoxShadow />
        <SkinUser />
        <div style={{ marginTop: "30px" }}>
          <Tabs
            active={this.getTabFromName(this.props.tab)}
            tabs={["Informations", "Statistiques", "Amis"]}
          />
        </div>
        <div>
          {this.props.tab === "info" && <Info />}
          {this.props.tab === "stats" && <Stats />}
          {this.props.tab === "friends" && <Friends />}
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  tab: PropTypes.string
};

Profile.defaultProps = {
  tab: "info"
};

export default Profile;
