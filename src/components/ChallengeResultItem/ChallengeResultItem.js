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

export default class ChallengeResultItem extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <div className={Style.left}>
          <User username="Kayane" ranking="2104" character="Kilik" />
        </div>
        <div className={Style.result}>
          0 <span>vs</span> 0
        </div>
        <div className={Style.right}>
          <User reversed username="Keev" ranking="1876" character="Nightmare" />
        </div>
      </div>
    );
  }
}

ChallengeResultItem.propTypes = {};

ChallengeResultItem.defaultProps = {};
