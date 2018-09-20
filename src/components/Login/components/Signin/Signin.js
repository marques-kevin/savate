import React, { PureComponent } from "react";
import Style from "./Signin.scss";
import TextField from "@material-ui/core/TextField";
import Button from "./../../../MainButton/MainButton";


export default class Signin extends PureComponent {
  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this;
    this.props.onSubmit({ email, password });
  };

  render() {
    return (
      <div className={Style.content}>
        <div className={Style.message}>
          Vous devez être connecté pour accéder à cette page !
        </div>
        <form id="form" noValidate onSubmit={this.onSubmit}>
          <TextField
            id="email"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="filled"
            fullWidth
            onChange={({ target }) => (this.email = target.value)}
          />
          <TextField
            id="password"
            label="Mot de passe"
            type="password"
            name="password"
            margin="normal"
            variant="filled"
            fullWidth
            onChange={({ target }) => (this.password = target.value)}
          />
          <div className={Style.forget}>Mot de passe oublié ?</div>
          <Button
            text="Se connecter"
            style={{ marginTop: "50px" }}
            type="submit"
            htmlFor="form"
          />
        </form>
      </div>
    );
  }
}

Signin.propTypes = {};
