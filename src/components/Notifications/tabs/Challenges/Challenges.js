import React, { PureComponent } from "react";
import Style from "./Challenges.scss";
import Notification from "./../../components/Notification/Notification";
import Connect from "./containers/Challenges.container";

const Message = ({ text }) => (
  <div
    style={{
      padding: "40px 15px",
      color: "gray",
      textAlign: "center"
    }}
  >
    {text}
  </div>
);

class Challenges extends PureComponent {
  render() {
    const { challenges, onView, onAccept, onDecline } = this.props;
    return (
      <div className={Style.container}>
        {challenges.map(({ user, challenger, id }) => (
          <Notification
            key={id}
            type="challenge"
            user={user}
            challenger={challenger}
            winner={user.winner ? user : challenger}
            onView={() => onView(id)}
            onAccept={() => onAccept(id)}
            onDecline={() => onDecline(id)}
          />
        ))}

        {challenges.length === 0 && (
          <Message text="Vous n'avez aucune demande de défis pour le moment..." />
        )}
      </div>
    );
  }
}

Challenges.propTypes = {};
Challenges.defaultProps = { challenges: [] };

export default Connect(Challenges);
export const Component = Challenges;
