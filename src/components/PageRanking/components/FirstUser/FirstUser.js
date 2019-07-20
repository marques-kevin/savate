import React, { PureComponent } from "react";
import Style from "./FirstUser.scss";
import SkinUser from "./../../../SkinUser/SkinUser";

class FirstUser extends PureComponent {
  render() {
    const { picture, username, ranking, onClick } = this.props;

    return (
      <div className={Style.container}>
        <div className={Style.rank}>1</div>
        <div className={Style.skin}>
          <SkinUser
            onClick={onClick}
            picture={picture}
            username={username}
            ranking={ranking}
          />
        </div>
      </div>
    );
  }
}

FirstUser.defaultProps = {
  onClick: () => console.warn("default: FirstUser.onClick")
};

export default FirstUser;
