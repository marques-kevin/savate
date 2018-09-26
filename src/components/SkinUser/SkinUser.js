import React, { PureComponent } from "react";
import Style from "./SkinUser.scss";
import Characters from "./../../utils/characters";

export default class SkinUser extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <div
          className={Style.thumb}
          style={{
            backgroundImage: `url(${Characters(this.props.character)})`
          }}
        />
        <div className={Style.grade}>{this.props.username}</div>
        <div className={Style.ranking}>{this.props.ranking}</div>
      </div>
    );
  }
}

SkinUser.propTypes = {};
