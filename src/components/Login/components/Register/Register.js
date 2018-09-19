import React, { PureComponent } from "react";
import Style from "./Register.scss";
import TextField from "@material-ui/core/TextField";
import Button from "./../../../MainButton/MainButton";

export default class Register extends PureComponent {
  render() {
    return (
      <div className={Style.content}>
        <div className={Style.message}>
          Veuillez vous créer un compte !
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
        <TextField
          id="password"
          label="Mot de passe"
          type="password"
          name="password"
          margin="normal"
          variant="filled"
          fullWidth
        />
        <TextField
          id="password-verification"
          label="Vérifier le mot de passe"
          type="password"
          name="password"
          margin="normal"
          variant="filled"
          fullWidth
        />
        <Button text="Valider" style={{ marginTop: "50px" }} />
      </div>
    );
  }
}

Register.propTypes = {};
