import React, { PureComponent } from "react";
import Style from "./Input.scss";

export default class Input extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <input
          placeholder={this.props.placeholder}
          style={this.props.style}
          className={Style.input}
          type={this.props.type}
          value={this.props.value}
          onChange={e => this.props.onChange(e.target.value.toLowerCase())}
        />
      </div>
    );
  }
}

Input.propTypes = {};

Input.defaultProps = {
  style: {},
  type: "text"
};
