import React, { Component } from "react";
import PropTypes from "prop-types";
import Style from "./Notifications.scss";
import Header from "./../../components/Header/Header";
import Challenges from "./tabs/Challenges/Challenges";
import News from "./tabs/News/News";
import Friends from "./tabs/Friends/Friends";
import Tabs from "./../../components/Tabs/Tabs";

class Notifications extends Component {
  getValueFromTab() {
    if (this.props.tab === "challenges") return 0;
    if (this.props.tab === "news") return 1;
    if (this.props.tab === "friends") return 2;
  }

  render() {
    return (
      <div className={Style.container}>
        <Header title="Notifications" noBoxShadow />
        <Tabs
          active={this.getValueFromTab()}
          tabs={["Défis", "News", "Demandes d'amis"]}
        />
        <div>
          {this.props.tab === "challenges" && <Challenges />}
          {this.props.tab === "news" && <News />}
          {this.props.tab === "friends" && <Friends />}
        </div>
      </div>
    );
  }
}

Notifications.propTypes = {
  tab: PropTypes.string
};

Notifications.defaultProps = {
  tab: "challenges"
};

export default Notifications;
