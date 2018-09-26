import React, { PureComponent } from "react";
import Style from "./FirstUser.scss";
import SkinUser from "./../../../SkinUser/SkinUser";

class FirstUser extends PureComponent {
  render() {
    const { character, username, ranking } = this.props;

    return (
      <div className={Style.container}>
        <div className={Style.rank}>1</div>
        <div className={Style.skin}>
          <SkinUser
            character={character}
            username={username}
            ranking={ranking}
          />
        </div>
      </div>
    );
  }
}

FirstUser.defaultProps = {};

export default FirstUser;
