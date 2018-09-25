import React, { PureComponent } from "react";
import Style from "./HistoryStats.scss";
import ChallengeResultItem from "./../ChallengeResultItem/ChallengeResultItem";

export default class HistoryStats extends PureComponent {
  render() {
    const challenges = this.props.challenges || [];
    return this.props.loading || challenges.length === 0 ? null : (
      <div className={Style.history}>
        <div className={Style.sectionTitle}>{this.props.title}</div>
        {challenges.map(({ user, challenger, id }) => (
          <ChallengeResultItem
            key={id}
            user={{ ...user, ranking: false }}
            challenger={{ ...challenger, ranking: false }}
            onClickResult={() => this.props.onClickResult(id)}
          />
        ))}
      </div>
    );
  }
}

HistoryStats.propTypes = {};
HistoryStats.defaultProps = {
  title: "Manches précédentes",
  loading: false
};
