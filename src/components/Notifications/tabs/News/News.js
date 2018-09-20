import React, { PureComponent } from "react";
import Style from "./News.scss";
import Notification from "./../../components/Notification/Notification";

export default class News extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <Notification type="news"/>
        <Notification type="news"/>
        <Notification type="news"/>
      </div>
    );
  }
}

News.propTypes = {};
News.defaultProps = { style: {} };
