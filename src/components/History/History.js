import React, { PureComponent } from "react";
import Style from "./History.scss";
import ChallengeResultItem from "./../ChallengeResultItem/ChallengeResultItem";

export default class History extends PureComponent {
  render() {
    const rounds = this.props.rounds || [];
    return this.props.loading || rounds.length === 0 ? null : (
      <div className={Style.history}>
        <div className={Style.sectionTitle}>{this.props.title}</div>
        {this.props.rounds.map(score => (
          <ChallengeResultItem
            user={{ ...this.props.user, ranking: false, score: score.user }}
            challenger={{
              ...this.props.challenger,
              ranking: false,
              score: score.challenger
            }}
          />
        ))}
      </div>
    );
  }
}

History.propTypes = {};
History.defaultProps = {
  title: "Manches précédentes",
  loading: false
};
