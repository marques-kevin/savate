import React, { PureComponent } from "react";
import Style from "./Forgot.scss";
import TextField from "@material-ui/core/TextField";
import Button from "./../../../MainButton/MainButton";

export default class Forgot extends PureComponent {
  state = { value: "" };

  handleSubmit = () => {
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <div className={Style.content}>
        <div className={Style.message}>Retrouver son mot de passe !</div>
        <TextField
          id="email"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="filled"
          fullWidth
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <Button
          text="Valider"
          style={{ marginTop: "50px" }}
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}

Forgot.propTypes = {};
