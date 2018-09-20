import React, { PureComponent } from "react";
import Style from "./Friends.scss";
import Notification from "./../../components/Notification/Notification";

export default class Friends extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <Notification type="friend" />
        <Notification type="friend" />
        <Notification type="friend" />
      </div>
    );
  }
}

Friends.propTypes = {};
Friends.defaultProps = { style: {} };
