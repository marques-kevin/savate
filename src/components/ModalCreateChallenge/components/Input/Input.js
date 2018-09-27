import React, { PureComponent } from "react";
import Style from "./Input.scss";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

export default class Input extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <TextField
          select={this.props.type === "number"}
          id={this.props.type}
          label={this.props.label}
          margin="normal"
          variant="filled"
          fullWidth
          InputProps={this.props.InputProps}
          placeholder={this.props.placeholder}
          style={this.props.style}
          className={Style.input}
          type={this.props.type}
          value={this.props.value}
          onChange={e => this.props.onChange(e.target.value)}
        >
          <MenuItem key={5} value={5}>
            5
          </MenuItem>
          <MenuItem key={10} value={10}>
            10
          </MenuItem>
        </TextField>
      </div>
    );
  }
}

Input.propTypes = {};

Input.defaultProps = {
  style: {},
  type: "text"
};
