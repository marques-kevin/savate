import React, { PureComponent } from "react";
import Style from "./Friends.scss";
import Friend from "./../../components/Friend/Friend";

export default class Info extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <Friend/>
      </div>
    );
  }
}

Info.propTypes = {};
Info.defaultProps = { style: {} };
