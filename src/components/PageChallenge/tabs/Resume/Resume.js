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
        <ResultChoice finished={true} winner={"challenger"} />
        <History />
      </div>
    );
  }
}

Resume.propTypes = {};
