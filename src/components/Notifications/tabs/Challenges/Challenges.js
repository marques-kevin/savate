import React, { PureComponent } from "react";
import Style from "./Challenges.scss";
import Friend from "./../../components/Friend/Friend";

export default class Challenges extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <Friend/>
      </div>
    );
  }
}

Challenges.propTypes = {};
Challenges.defaultProps = { style: {} };
