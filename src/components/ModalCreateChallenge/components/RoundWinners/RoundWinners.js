import React, { PureComponent } from "react";
import Style from "./RoundWinners.scss";
import Header from "./../../../Header/Header";
import Footer from "./../Footer/Footer";
import ChallengeResultItem from "./../../../ChallengeResultItem/ChallengeResultItem";
import Slider from "./../../../Slider/Slider";

const mockData = {
  username: "Kayane",
  character: "Kilik",
  ranking: 2308,
  score: 5
};

export default class RoundWinners extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <Header title="Les vainqueurs de chaque manches ?" noBoxShadow />
        <div className={Style.choiceContainer}>
          <div className={Style.resume}>
            <ChallengeResultItem
              user={mockData}
              challenger={mockData}
              noBorder
            />
          </div>
          <Slider/>
        </div>
        <Footer onPrev />
      </div>
    );
  }
}

RoundWinners.propTypes = {};
