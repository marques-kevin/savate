import React, { PureComponent } from "react";
import Style from "./User.scss";
import Thumb from "./../../../Thumb/Thumb";

export default class User extends PureComponent {
  render() {
    const { character, username, text, date } = this.props;
    return (
      <div className={Style.user}>
        <Thumb character={character} />
        <div className={Style.userInfo}>
          <div className={Style.username}>{username}</div>
          <div className={Style.message}>{text}</div>
        </div>
        <div className={Style.date}>{date}</div>
      </div>
    );
  }
}

User.propTypes = {};

User.defaultProps = {};
