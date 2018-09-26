import React, { PureComponent } from "react";
import Style from "./ResultChoice.scss";
import ChallengeResultItem from "./../ChallengeResultItem/ChallengeResultItem";
import Slider from "./../Slider/Slider";

export default class ResultChoice extends PureComponent {
  render() {
    const [userScore, challengerScore] = this.props.score || [0, 0];
    return (
      <div className={Style.choiceContainer}>
        <div className={Style.resume}>
          <ChallengeResultItem
            user={{ ...this.props.user, score: userScore }}
            challenger={{ ...this.props.challenger, score: challengerScore }}
            noBorder
            onClickUser={this.props.onClickUser}
          />
        </div>
        <div className={Style.slider}>
          <Slider
            finished={this.props.finished}
            onChoice={this.props.onChoice}
            user={this.props.user}
            challenger={this.props.challenger}
            winner={this.props.winner}
          />
        </div>
      </div>
    );
  }
}

ResultChoice.propTypes = {};
