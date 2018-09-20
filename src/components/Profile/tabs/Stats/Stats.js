import React, { PureComponent } from "react";
import Style from "./Stats.scss";
import Pie from "./../../components/Pie/Pie";
import History from "./../../../../components/History/History";

export default class Stats extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <div className={Style.pie}>
          <Pie
            totalFights={120}
            totalVictoryFights={80}
            totalLooseFights={40}
            totalChallenge={10}
            totalVictoryChallenge={6}
            totalLooseChallenge={4}
          />
        </div>
        <History title="Historique des défis"/>
      </div>
    );
  }
}

Stats.propTypes = {};
Stats.defaultProps = {};
