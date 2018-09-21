import React, { PureComponent } from "react";
import Style from "./Resume.scss";
import ResultChoice from "./../../../ResultChoice/ResultChoice";
import History from "./../../../History/History";
import RoundInfo from "./../../../RoundInfo/RoundInfo";

export default class Resume extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <RoundInfo />
        <ResultChoice finished={true} winner={"challenger"}/>
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
      </div>
    );
  }
}

Resume.propTypes = {};
