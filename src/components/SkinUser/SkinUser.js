import React, { PureComponent } from "react";
import Style from "./SkinUser.scss";

export default class SkinUser extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <div
          className={Style.thumb}
          style={{
            backgroundImage: `url(${this.props.picture})`
          }}
          onClick={this.props.onClick}
        />
        <div className={Style.grade}>{this.props.username}</div>
        <div className={Style.ranking}>{this.props.ranking}</div>
      </div>
    );
  }
}

SkinUser.propTypes = {};
SkinUser.defaultProps = {
  onClick: () => console.warn("default: SkinUser.onClick")
};
