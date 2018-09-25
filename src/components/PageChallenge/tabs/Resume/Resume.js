import React, { PureComponent } from "react";
import Style from "./Resume.scss";
import ResultChoice from "./../../../ResultChoice/ResultChoice";
import History from "./../../../History/History";
import RoundInfo from "./../../../RoundInfo/RoundInfo";
import Connect from "./containers/Resume.container";

class Resume extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <RoundInfo
          loading={this.props.loading}
          actual="terminée"
          total={this.props.challenge.firstTo}
        />
        <ResultChoice
          loading={this.props.loading}
          user={this.props.challenge.user}
          challenger={this.props.challenge.challenger}
          score={this.props.score}
          finished={true}
          winner={this.props.winner}
        />
        <History
          user={this.props.challenge.user}
          challenger={this.props.challenge.challenger}
          loading={this.props.loading}
          rounds={this.props.challenge.rounds}
        />
      </div>
    );
  }
}

Resume.propTypes = {};
Resume.defaultProps = {};

export default Connect(Resume);
