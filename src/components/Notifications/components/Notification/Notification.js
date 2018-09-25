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
        <div className={Style.user}>
          <User
            username={this.props.user.username}
            character={this.props.user.character}
            text={`Vous a envoyé une demande de défi avec une victoire pour ${
              this.props.winner.username
            } de ${this.props.user.score} à ${this.props.challenger.score}.`}
            date={this.props.type === "friend" ? false : "2m"}
          />
          {this.props.type === "friend" && (
            <div className={Style.userBtns}>
              <div className={Style.userBtn}>
                <Close />
              </div>
              <div className={Style.userBtn}>
                <Validate />
              </div>
            </div>
          )}
        </div>
        {this.props.type === "challenge" && (
          <div className={Style.confirmationBtns}>
            <div className={Style.button}>
              <Search />
              <span>Voir</span>
            </div>
            <div className={Style.buttonActive} onClick={this.props.onAccept}>
              <Validate />
              <span>Valider</span>
            </div>
            <div className={Style.button} onClick={this.props.onDecline}>
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
