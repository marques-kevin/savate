import React, { PureComponent } from "react";
import Style from "./RoundWinners.scss";
import Header from "./../../../Header/Header";
import Footer from "./../Footer/Footer";
import ResultChoice from "./../../../ResultChoice/ResultChoice";
import History from "./../../../History/History";
import RoundInfo from "./../../../RoundInfo/RoundInfo";

export default class RoundWinners extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <Header title="Les vainqueurs de chaque manches ?" noBoxShadow />
        <RoundInfo />
        <ResultChoice />
        {/* <div className={Style.choiceContainer}>
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
        </div> */}
        <History />
        {/* <div className={Style.history}>
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
        </div> */}
        <Footer onPrev />
      </div>
    );
  }
}

RoundWinners.propTypes = {};
