import React, { PureComponent } from "react";
import Style from "./SkinUser.scss";
import Characters from "./../../utils/characters";

export default class SkinUser extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <div
          className={Style.thumb}
          style={{ backgroundImage: `url(${Characters("Kilik")})` }}
        />
        <div className={Style.grade}>Grand maître</div>
        <div className={Style.ranking}>2089</div>
      </div>
    );
  }
}

SkinUser.propTypes = {};
