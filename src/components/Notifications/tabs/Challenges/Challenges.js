import React, { PureComponent } from "react";
import Style from "./Challenges.scss";
import Notification from "./../../components/Notification/Notification";
import Connect from "./containers/Challenges.container";

class Challenges extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        {this.props.challenges.map(({ user, challenger }) => (
          <Notification
            type="challenge"
            user={user}
            challenger={challenger}
            winner={user.winner ? user : challenger}
          />
        ))}
      </div>
    );
  }
}

Challenges.propTypes = {};
Challenges.defaultProps = { challenges: [] };

export default Connect(Challenges);
export const Component = Challenges;
