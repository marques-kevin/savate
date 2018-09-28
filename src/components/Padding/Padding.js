import React, { PureComponent } from "react";

class Padding extends PureComponent {
  render() {
    return <div style={{ width: "100%", height: this.props.height }} />;
  }
}

export default Padding;
