import React, { PureComponent } from "react";
import Style from "./RoundInfo.scss";

export default class RoundInfo extends PureComponent {
  render() {
    return (
      <div className={Style.roundInfo}>
        <h1>Manche {this.props.actual}</h1>
        <h2>ft{this.props.total}</h2>
      </div>
    );
  }
}

RoundInfo.propTypes = {};
