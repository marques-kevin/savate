import React, { PureComponent } from "react";
import Style from "./Challenges.scss";
import Notification from "./../../components/Notification/Notification";

export default class Challenges extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <Notification type="challenge"/>
        <Notification type="challenge"/>
        <Notification type="challenge"/>
      </div>
    );
  }
}

Challenges.propTypes = {};
Challenges.defaultProps = { style: {} };
