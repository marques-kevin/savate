import React, { PureComponent } from "react";
import Style from "./CreateChallengeBtn.scss";

export default class CreateChallengeBtn extends PureComponent {
  render() {
    return <div className={Style.container}>Lancer un défi</div>;
  }
}

CreateChallengeBtn.propTypes = {};
