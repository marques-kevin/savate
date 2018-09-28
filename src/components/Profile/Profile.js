import React, { Component } from "react";
import PropTypes from "prop-types";
import Style from "./Profile.scss";
import Header from "./../../components/Header/Header";
import NeedLogin from "./../../components/NeedLogin/NeedLogin";
import SkinUser from "./../../components/SkinUser/SkinUser";
import Info from "./tabs/Info/Info";
import Stats from "./tabs/Stats/Stats";
// import Friends from "./tabs/Friends/Friends";
import Tabs from "./../../components/Tabs/Tabs";
import Connect from "./containers/Profile.container";

const NoAuthenticated = () => (
  <div className={Style.container}>
    <Header title="Profil" noBoxShadow />
    <NeedLogin />
  </div>
);

class Profile extends Component {
  state = {
    tab: "info",
    tabs: ["info", "stats", "friends"]
  };

  getTabFromName(tab) {
    return this.state.tabs.findIndex(t => t === tab);
  }

  render() {
    return !this.props.authenticated ? (
      <NoAuthenticated />
    ) : (
      <div className={Style.container}>
        <Header title="Profil" noBoxShadow />

        <SkinUser
          username={this.props.username}
          character={this.props.character}
          ranking={this.props.ranking}
        />

        <div style={{ marginTop: "30px" }}>
          <Tabs
            active={this.getTabFromName(this.state.tab)}
            onChange={e => this.setState({ tab: this.state.tabs[e] })}
            tabs={["Informations", "Statistiques", "Amis"]}
          />
        </div>
        <div>
          {this.state.tab === "info" && <Info />}
          {this.state.tab === "stats" && <Stats userId={this.props.userId} />}
          {this.state.tab === "friends" && (
            <div
              style={{
                padding: "40px 15px",
                color: "gray",
                textAlign: "center"
              }}
            >
              Cette fonctionnalité arrivera prochainement...
            </div>
          )}
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

export default Connect(Profile);
