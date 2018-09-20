import React, { PureComponent } from "react";
import Style from "./History.scss";
import ChallengeResultItem from "./../ChallengeResultItem/ChallengeResultItem";

const mockData = {
  username: "Kayane",
  character: "Kilik",
  ranking: 2308,
  score: 5
};

export default class History extends PureComponent {
  render() {
    return (
      <div className={Style.history}>
        <div className={Style.sectionTitle}>{this.props.title}</div>
        <ChallengeResultItem
          user={{ ...mockData, ranking: false }}
          challenger={{ ...mockData, ranking: false }}
        />
        <ChallengeResultItem
          user={{ ...mockData, ranking: false }}
          challenger={{ ...mockData, ranking: false }}
        />
        <ChallengeResultItem
          user={{ ...mockData, ranking: false }}
          challenger={{ ...mockData, ranking: false }}
        />
      </div>
    );
  }
}

History.propTypes = {};
History.defaultProps = {
  title: "Manches précédentes"
};
