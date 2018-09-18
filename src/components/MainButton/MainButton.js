import React, { PureComponent } from "react";
import Style from "./MainButton.scss";

export default class MainButton extends PureComponent {
  render() {
    return (
      <div
        className={Style.container}
        onClick={this.props.onClik}
        style={this.props.style}
      >
        {this.props.text}
      </div>
    );
  }
}

MainButton.propTypes = {};
MainButton.defaultProps = { style: {} };
