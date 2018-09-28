import React, { PureComponent } from "react";
import Style from "./Footer.scss";

export default class Footer extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <div className={Style.button} onClick={this.props.onCancel}>
          Retour
        </div>
        {this.props.page === "signin" && (
          <div className={Style.button} onClick={this.props.onRegister}>
            Créer un compte
          </div>
        )}
        {(this.props.page === "register" || this.props.page === "forgot") && (
          <div className={Style.button} onClick={this.props.onSignin}>
            Se connecter
          </div>
        )}
      </div>
    );
  }
}

Footer.propTypes = {};
