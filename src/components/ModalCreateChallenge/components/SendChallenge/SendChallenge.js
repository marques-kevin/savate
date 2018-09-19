import React, { PureComponent } from "react";
import Style from "./SendChallenge.scss";
import Header from "./../../../Header/Header";
import Footer from "./../Footer/Footer";
import Button from "./../../../MainButton/MainButton";

export default class SendChallenge extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <Header title="Envoyer la demande de défi ?" noBoxShadow />
        <Button text="Envoyer" style={{ marginTop: "100px" }} />
        <Footer onPrev />
      </div>
    );
  }
}

SendChallenge.propTypes = {};
