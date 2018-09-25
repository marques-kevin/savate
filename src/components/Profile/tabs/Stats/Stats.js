import React, { PureComponent } from "react";
import Style from "./Stats.scss";
import Pie from "./../../components/Pie/Pie";
import HistoryStats from "./../../../../components/HistoryStats/HistoryStats";
import Connect from "./containers/Stats.container";

class Stats extends PureComponent {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div className={Style.container}>
        <div className={Style.pie}>
          <Pie
            totalChallenge={this.props.totalChallenge}
            totalChallengeWin={this.props.totalChallengeWin}
            totalChallengeLoose={this.props.totalChallengeLoose}
            totalRounds={this.props.totalRounds}
            totalRoundsWin={this.props.totalRoundsWin}
            totalRoundLoose={this.props.totalRoundLoose}
          />
        </div>
        <HistoryStats
          title="Historique des défis"
          challenges={this.props.challenges}
          onClickResult={this.props.onClickResult}
        />
      </div>
    );
  }
}

Stats.propTypes = {};
Stats.defaultProps = {};

export default Connect(Stats);
