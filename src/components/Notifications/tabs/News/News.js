import React, { PureComponent } from "react";
import Style from "./News.scss";
import Friend from "./../../components/Friend/Friend";

export default class News extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <Friend/>
      </div>
    );
  }
}

News.propTypes = {};
News.defaultProps = { style: {} };
