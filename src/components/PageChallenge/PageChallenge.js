import React, { Component } from "react";
import PropTypes from "prop-types";
import Style from "./PageChallenge.scss";
import Header from "./../../components/Header/Header";
import Resume from "./tabs/Resume/Resume";
import Stats from "./tabs/Stats/Stats";
import Switch from "./../../components/Switch/Switch";

class PageChallenge extends Component {
  render() {
    return (
      <div className={Style.container}>
        <Header title="James vs Jack" noBoxShadow back />
        <Switch  />
        <div>
          {this.props.tab === "resume" && <Resume />}
          {this.props.tab === "history" && <Stats />}
        </div>
      </div>
    );
  }
}

PageChallenge.propTypes = {
  tab: PropTypes.string
};

PageChallenge.defaultProps = {
  tab: "resume"
};

export default PageChallenge;
