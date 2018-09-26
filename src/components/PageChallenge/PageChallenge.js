import React, { Component } from "react";
import PropTypes from "prop-types";
import Style from "./PageChallenge.scss";
import Header from "./../../components/Header/Header";
import Resume from "./tabs/Resume/Resume";
import Stats from "./tabs/Stats/Stats";
import Switch from "./../../components/Switch/Switch";
import Connect from "./containers/PageChallenge.container";

class PageChallenge extends Component {
  state = {
    tab: 0
  };

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
        <Switch
          tabs={["Résultats", "Statistiques"]}
          onSwitch={tab => this.setState({ tab })}
        />
        <div>
          {this.state.tab === 0 && <Resume />}
          {this.state.tab === 1 && <Stats />}
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
