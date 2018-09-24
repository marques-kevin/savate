import React, { PureComponent } from "react";
import Style from "./ResultChoice.scss";
import ChallengeResultItem from "./../ChallengeResultItem/ChallengeResultItem";
import Slider from "./../Slider/Slider";

export default class ResultChoice extends PureComponent {
  render() {
    const [userScore, challengerScore] = this.props.score;
    return (
      <div className={Style.choiceContainer}>
        <div className={Style.resume}>
          <ChallengeResultItem
            user={{ ...this.props.user, score: userScore }}
            challenger={{ ...this.props.challenger, score: challengerScore }}
            noBorder
          />
        </div>
        <div className={Style.slider}>
          <Slider
            onChoice={this.props.onChoice}
            user={this.props.user}
            challenger={this.props.challenger}
          />
        </div>
      </div>
    );
  }
}

ResultChoice.propTypes = {};
