import React, { PureComponent } from "react";
import Style from "./Notification.scss";
import User from "./../User/User";
import Close from "@material-ui/icons/Close";
import Validate from "@material-ui/icons/Check";
import Search from "@material-ui/icons/Search";

export default class Notification extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <User
          username="Kayane"
          character={"Kilik"}
          text="Vous a envoyé une demande de défi avec une victoire pour Keev de 5 à 2."
          date="2m"
        />
        {this.props.type === "challenge" && (
          <div className={Style.confirmationBtns}>
            <div className={Style.button}>
              <Search />
              <span>Voir</span>
            </div>
            <div className={Style.buttonActive}>
              <Validate />
              <span>Valider</span>
            </div>
            <div className={Style.button}>
              <Close />
              <span>Refuser</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Notification.propTypes = {};
Notification.defaultProps = { style: {} };
