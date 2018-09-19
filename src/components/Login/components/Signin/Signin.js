import React, { PureComponent } from "react";
import Style from "./Signin.scss";
import TextField from "@material-ui/core/TextField";
import Button from "./../../../MainButton/MainButton";

export default class Signin extends PureComponent {
  render() {
    return (
      <div className={Style.content}>
        <div className={Style.message}>
          Vous devez être connecté pour accéder à cette page !
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
        <div className={Style.forget}>Mot de passe oublié ?</div>
        <Button text="Se connecter" style={{ marginTop: "50px" }} />
      </div>
    );
  }
}

Signin.propTypes = {};
