import React, { PureComponent } from "react";
import Style from "./Body.scss";

export default class Body extends PureComponent {
  render() {
    return <div className={Style.container}>{this.props.children}</div>;
  }
}

Body.propTypes = {};
