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
        <div className={Style.roundInfo}>
          <h1>Manche 3</h1>
          <h2>ft5</h2>
        </div>
        <div className={Style.choiceContainer}>
          <div className={Style.resume}>
            <ChallengeResultItem
              user={mockData}
              challenger={mockData}
              noBorder
            />
          </div>
          <div className={Style.slider}>
            <Slider />
          </div>
        </div>
        <div className={Style.history}>
          <div className={Style.sectionTitle}>Manches précédentes</div>
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
        <Footer onPrev />
      </div>
    );
  }
}

RoundWinners.propTypes = {};
