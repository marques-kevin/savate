import React, { PureComponent } from "react";
import Style from "./SendChallenge.scss";
import Header from "./../../../Header/Header";
import Button from "./../../../MainButton/MainButton";
import Connect from "./containers/SendChallenge.container";

class SendChallenge extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <Header title="Envoyer la demande de défi ?" noBoxShadow />
        <div className={Style.message}>
          <p>
            J'ai défié <span>{this.props.challenger}</span>
          </p>
          <p>
            sur <span>{this.props.rounds}</span> manches gagnantes
          </p>
          <p>
            pour un résultat de <span>{this.props.results[0]}</span> à{" "}
            <span>{this.props.results[1]}</span>
          </p>
          <p>
            pour <span>{this.props.winner}</span>
          </p>
        </div>
        <Button
          text="Envoyer"
          style={{ marginTop: "100px" }}
          onClick={this.props.onSubmit}
        />
      </div>
    );
  }
}

SendChallenge.propTypes = {};
SendChallenge.defaultProps = {
  results: [0, 0]
};

export default Connect(SendChallenge);
export const Component = SendChallenge;
