import React, { PureComponent } from "react";
import Style from "./RoundWinners.scss";
import Header from "./../../../Header/Header";
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
        <History />
      </div>
    );
  }
}

RoundWinners.propTypes = {};
RoundWinners.defaultProps = {
  onPrev: () => console.warn("default: RoundWinners.onPrev")
};
