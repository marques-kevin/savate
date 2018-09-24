import React, { PureComponent } from "react";
import Style from "./Body.scss";
import Connect from "./containers/Body.container";

class Body extends PureComponent {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return <div className={Style.container}>{this.props.children}</div>;
  }
}

Body.propTypes = {};

export default Connect(Body);
export const Component = Body;
