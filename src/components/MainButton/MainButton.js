import React, { PureComponent } from "react";
import Style from "./MainButton.scss";

export default class MainButton extends PureComponent {
  render() {
    return (
      <button
        className={Style.container}
        onClick={this.props.onClick}
        style={this.props.style}
      >
        {this.props.text}
      </button>
    );
  }
}

MainButton.propTypes = {};
MainButton.defaultProps = { style: {} };
