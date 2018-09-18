import React, { PureComponent } from "react";
import Style from "./ModalCreateChallenge.scss";

export default class ModalCreateChallenge extends PureComponent {
  render() {
    return <div className={Style.container}>Lancer un défi</div>;
  }
}

ModalCreateChallenge.propTypes = {};
