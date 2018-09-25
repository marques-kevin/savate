import React, { Component } from "react";
import PropTypes from "prop-types";
import Style from "./PageChallenge.scss";
import Header from "./../../components/Header/Header";
import Resume from "./tabs/Resume/Resume";
import Stats from "./tabs/Stats/Stats";
import Switch from "./../../components/Switch/Switch";
import Connect from "./containers/PageChallenge.container";

class PageChallenge extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div className={Style.container}>
        <Header
          title={this.props.versus}
          noBoxShadow
          onBack={this.props.onBack}
        />
        <Switch tabs={["Résultats", "Statistiques"]} />
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

export default Connect(PageChallenge);
