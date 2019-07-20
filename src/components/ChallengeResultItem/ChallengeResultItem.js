import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import classNames from "classnames";
import Style from "./ChallengeResultItem.scss";
import Thumb from "./../Thumb/Thumb";

const User = ({ reversed, ranking, picture, username, onClick }) => (
  <div className={Style.user} onClick={onClick}>
    {!reversed && <Thumb picture={picture} />}
    <div className={reversed ? Style.userInfoReversed : Style.userInfo}>
      <div className={Style.username}>{username}</div>
      {ranking && <div className={Style.userRank}>{ranking}</div>}
    </div>
    {reversed && <Thumb character={picture} />}
  </div>
);

const extractInfo = ({ username, ranking, picture }) => ({
  username,
  ranking,
  picture
});

export default class ChallengeResultItem extends PureComponent {
  render() {
    return (
      <div
        className={classNames(Style.container, {
          [Style.noBorder]: !!this.props.noBorder
        })}
      >
        <div className={Style.left}>
          <User
            {...extractInfo(this.props.user)}
            onClick={() => this.props.onClickUser(this.props.user.id)}
          />
        </div>
        <div className={Style.result} onClick={this.props.onClickResult}>
          {this.props.user.score} <span>vs</span> {this.props.challenger.score}
        </div>
        <div className={Style.right}>
          <User
            reversed
            {...extractInfo(this.props.challenger)}
            onClick={() => this.props.onClickUser(this.props.challenger.id)}
          />
        </div>
      </div>
    );
  }
}

ChallengeResultItem.propTypes = {};

ChallengeResultItem.defaultProps = {
  onClickUser: () => console.warn("default: ChallengeResultItem.onClickUser")
};
