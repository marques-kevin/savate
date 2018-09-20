import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import Style from "./UserItem.scss";
import Thumb from "./../Thumb/Thumb";

export default class UserItem extends PureComponent {
  render() {
    const { reversed, character, username, ranking } = this.props;
    return (
      <div className={Style.user}>
        {!reversed && <Thumb character={character} />}
        <div className={reversed ? Style.userInfoReversed : Style.userInfo}>
          <div className={Style.username}>{username}</div>
          {ranking && <div className={Style.userRank}>{ranking}</div>}
        </div>
        {reversed && <Thumb character={character} />}
      </div>
    );
  }
}

UserItem.propTypes = {};

UserItem.defaultProps = {};
