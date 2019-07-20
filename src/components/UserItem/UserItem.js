import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import Style from "./UserItem.scss";
import Thumb from "./../Thumb/Thumb";

export default class UserItem extends PureComponent {
  render() {
    const { reversed, picture, username, ranking, onClick } = this.props;
    return (
      <div className={Style.user} onClick={onClick}>
        {!reversed && <Thumb picture={picture} />}
        <div className={reversed ? Style.userInfoReversed : Style.userInfo}>
          <div className={Style.username}>{username}</div>
          {ranking && <div className={Style.userRank}>{ranking}</div>}
        </div>
        {reversed && <Thumb picture={picture} />}
      </div>
    );
  }
}

UserItem.propTypes = {};

UserItem.defaultProps = {
  onClick: () => console.warn("default: UserItem.onClick")
};
