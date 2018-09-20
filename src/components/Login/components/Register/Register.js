import React, { PureComponent } from "react";
import Style from "./Register.scss";
import TextField from "@material-ui/core/TextField";
import Button from "./../../../MainButton/MainButton";

export default class Register extends PureComponent {
  state = { errorPassword: false, user: {} };

  onSubmit = e => {
    e.preventDefault();
    const { email, password, password2 } = this.state.user;
    if (password !== password2) return this.setState({ errorPassword: true });
    this.props.onSubmit({ email, password });
  };

  onChangePassword2() {
    const { password, password2 } = this.state.user;
    if (this.state.errorPassword && password !== password2) return false;
    if (this.state.errorPassword && password === password2)
      return this.setState({ errorPassword: false });
    if (!this.state.errorPassword && password !== password2)
      return this.setState({ errorPassword: true });
  }

  handleChange = ({ target }) => {
    this.setState(
      ({ user }) => ({
        user: { ...user, [target.name]: target.value }
      }),
      () => target.name === "password2" && this.onChangePassword2()
    );
  };

  render() {
    return (
      <div className={Style.content}>
        <form id="form" onSubmit={this.onSubmit}>
          <div className={Style.message}>Veuillez vous créer un compte !</div>
          <TextField
            id="email"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="filled"
            fullWidth
            onChange={this.handleChange}
          />
          <TextField
            id="password"
            label="Mot de passe"
            type="password"
            name="password"
            margin="normal"
            variant="filled"
            fullWidth
            onChange={this.handleChange}
          />
          <TextField
            error={this.state.errorPassword}
            helperText={
              this.state.errorPassword
                ? "Le mot de passe ne correspond pas à l'autre mot de passe"
                : " "
            }
            id="password-verification"
            label="Vérifier le mot de passe"
            type="password"
            name="password2"
            margin="normal"
            variant="filled"
            fullWidth
            onChange={this.handleChange}
          />
          <Button text="Valider" style={{ marginTop: "50px" }} type="submit" />
        </form>
      </div>
    );
  }
}

Register.propTypes = {};
