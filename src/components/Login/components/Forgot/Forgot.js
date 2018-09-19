import React, { PureComponent } from "react";
import Style from "./Forgot.scss";
import TextField from "@material-ui/core/TextField";
import Button from "./../../../MainButton/MainButton";

export default class Forgot extends PureComponent {
  render() {
    return (
      <div className={Style.content}>
        <div className={Style.message}>
          Retrouver son mot de passe !
        </div>
        <TextField
          id="email"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="filled"
          fullWidth
        />
        <Button text="Valider" style={{ marginTop: "50px" }} />
      </div>
    );
  }
}

Forgot.propTypes = {};
