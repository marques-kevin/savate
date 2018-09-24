import React, { PureComponent } from "react";
import Style from "./RoundWinners.scss";
import Header from "./../../../Header/Header";
import ResultChoice from "./../../../ResultChoice/ResultChoice";
import History from "./../../../History/History";
import RoundInfo from "./../../../RoundInfo/RoundInfo";
import Connect from "./containers/RoundWinners.container";

class RoundWinners extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <Header title="Les vainqueurs de chaque manches ?" noBoxShadow />
        <RoundInfo
          total={this.props.roundTotal}
          actual={this.props.roundLength}
        />
        <ResultChoice
          onChoice={this.props.onChoice}
          user={this.props.user}
          challenger={this.props.challenger}
          score={[this.props.userScore, this.props.challengerScore]}
        />
        <History
          rounds={this.props.rounds}
          user={this.props.user}
          challenger={this.props.challenger}
        />
      </div>
    );
  }
}

RoundWinners.propTypes = {};
RoundWinners.defaultProps = {
  onPrev: () => console.warn("default: RoundWinners.onPrev"),
  rounds: []
};

export default Connect(RoundWinners);
export const Component = RoundWinners;
