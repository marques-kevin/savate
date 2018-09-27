import React, { PureComponent } from "react";
import Style from "./Register.scss";
import TextField from "@material-ui/core/TextField";
import Button from "./../../../MainButton/MainButton";
import DialogSelectCharacter from "./../../../DialogSelectCharacter/DialogSelectCharacter";
import Thumb from "./../../../Thumb/Thumb";

export default class Register extends PureComponent {
  state = {
    errorPassword: false,
    errorCharacter: false,
    errorEmail: false,
    errorUsername: false,
    user: {},
    dialog: false
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, username, password, password2, character } = this.state.user;
    if (password !== password2) return this.setState({ errorPassword: true });
    if (!character) return this.setState({ errorCharacter: true });
    if (!email) return this.setState({ errorEmail: true });
    if (!username) return this.setState({ errorUsername: true });
    this.props.onSubmit({ email, password, username, character });
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

  onSelectCharacter = character => {
    this.setState(({ user }) => ({
      user: { ...user, character },
      dialog: false
    }));
  };

  render() {
    return (
      <div className={Style.content}>
        <form id="form" onSubmit={this.onSubmit}>
          <div
            className={Style.thumb}
            onClick={() => this.setState({ dialog: true })}
          >
            <Thumb character={this.state.user.character} size={70} />
            {this.state.user.character && (
              <div className={Style.thumbCharacter}>
                {this.state.user.character}
              </div>
            )}
            {!this.state.user.character &&
              !this.state.errorCharacter && (
                <div className={Style.thumbPlaceholder}>
                  Sélectionnez votre personnage préféré
                </div>
              )}
            {!this.state.user.character &&
              this.state.errorCharacter && (
                <div className={Style.thumbPlaceholderError}>
                  Vous devez sélectionner votre personnage préféré
                </div>
              )}
          </div>
          <TextField
            id="username"
            label="Pseudo"
            type="text"
            name="username"
            margin="normal"
            variant="filled"
            fullWidth
            error={this.state.errorUsername}
            helperText={
              this.state.errorUsername ? "Le pseudo doit être rempli" : null
            }
            onChange={this.handleChange}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            name="email"
            margin="normal"
            variant="filled"
            error={this.state.errorEmail}
            helperText={
              this.state.errorEmail ? "L'email doit être bien rempli" : null
            }
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
                : null
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
          <div style={{ width: "100%", height: "100px" }} />
          <DialogSelectCharacter
            open={this.state.dialog}
            onClose={() => this.setState({ dialog: false })}
            onSelect={this.onSelectCharacter}
            label="Personnage préféré"
            text="En changeant de personnage, votre image de profil va également être modifié."
            title="Sélectionner votre personnage préféré"
          />
        </form>
      </div>
    );
  }
}

Register.propTypes = {};
