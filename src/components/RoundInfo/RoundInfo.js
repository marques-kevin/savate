import React, { PureComponent } from "react";
import Style from "./RoundInfo.scss";

export default class RoundInfo extends PureComponent {
  render() {
    return (
      <div className={Style.roundInfo}>
        <h1>Manche 3</h1>
        <h2>ft5</h2>
      </div>
    );
  }
}

RoundInfo.propTypes = {};
