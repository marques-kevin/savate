import React, { PureComponent } from "react";
import Style from "./ResultChoice.scss";
import ChallengeResultItem from "./../ChallengeResultItem/ChallengeResultItem";
import Slider from "./../Slider/Slider";

const mockData = {
  username: "Kayane",
  character: "Kilik",
  ranking: 2308,
  score: 5
};

export default class ResultChoice extends PureComponent {
  render() {
    return (
      <div className={Style.choiceContainer}>
        <div className={Style.resume}>
          <ChallengeResultItem user={mockData} challenger={mockData} noBorder />
        </div>
        <div className={Style.slider}>
          <Slider finished={true} winner="challenger"/>
        </div>
      </div>
    );
  }
}

ResultChoice.propTypes = {};
