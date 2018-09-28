import React, { Component } from "react";
import Style from "./Notifications.scss";
import Header from "./../../components/Header/Header";
import NeedLogin from "./../../components/NeedLogin/NeedLogin";
import Challenges from "./tabs/Challenges/Challenges";
// import News from "./tabs/News/News";
// import Friends from "./tabs/Friends/Friends";
import Tabs from "./../../components/Tabs/Tabs";
import Connect from "./containers/Notifications.container";

class Notifications extends Component {
  state = {
    tab: 0
  };

  render() {
    return !this.props.authenticated ? (
      <NeedLogin title="Notifications" />
    ) : (
      <div className={Style.container}>
        <Header title="Notifications" noBoxShadow />
        <Tabs
          active={this.state.tab}
          tabs={["Défis", "News", "Demandes d'amis"]}
          onChange={tab => this.setState({ tab })}
        />
        <div>
          {this.state.tab === 0 && <Challenges />}
          {this.state.tab === 1 && (
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
          {this.state.tab === 2 && (
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

Notifications.propTypes = {};

Notifications.defaultProps = {};

export default Connect(Notifications);
