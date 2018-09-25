import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import classNames from "classnames";
import Style from "./ChallengeResultItem.scss";
import Thumb from "./../Thumb/Thumb";

const User = ({ reversed, ranking, character, username }) => (
  <div className={Style.user}>
    {!reversed && <Thumb character={character} />}
    <div className={reversed ? Style.userInfoReversed : Style.userInfo}>
      <div className={Style.username}>{username}</div>
      {ranking && <div className={Style.userRank}>{ranking}</div>}
    </div>
    {reversed && <Thumb character={character} />}
  </div>
);

const extractInfo = ({ username, ranking, character }) => ({
  username,
  ranking,
  character
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
          <User {...extractInfo(this.props.user)} />
        </div>
        <div className={Style.result} onClick={this.props.onClickResult}>
          {this.props.user.score} <span>vs</span> {this.props.challenger.score}
        </div>
        <div className={Style.right}>
          <User reversed {...extractInfo(this.props.challenger)} />
        </div>
      </div>
    );
  }
}

ChallengeResultItem.propTypes = {};

ChallengeResultItem.defaultProps = {};
