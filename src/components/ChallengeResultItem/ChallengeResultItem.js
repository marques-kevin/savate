import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import Style from "./ChallengeResultItem.scss";
import Thumb from "./../Thumb/Thumb";

const User = ({ reversed, ranking, character, username }) => (
  <div className={Style.user}>
    {!reversed && <Thumb character={character} />}
    <div className={reversed ? Style.userInfoReversed : Style.userInfo}>
      <div className={Style.username}>{username}</div>
      <div className={Style.userRank}>{ranking}</div>
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
      <div className={Style.container}>
        <div className={Style.left}>
          <User {...extractInfo(this.props.user)} />
        </div>
        <div className={Style.result}>
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
