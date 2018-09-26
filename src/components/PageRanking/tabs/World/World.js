import React, { PureComponent } from "react";
import FirstUser from "./../../components/FirstUser/FirstUser";
import UserItem from "./../../components/UserItem/UserItem";
import Connect from "./containers/World.container";

class World extends PureComponent {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const [first, ...all] = this.props.users;
    return this.props.users.length === 0 ? null : (
      <div>
        <FirstUser
          username={first.username}
          ranking={first.ranking}
          character={first.character}
        />
        {all.map((user, index) => (
          <UserItem
            key={user.id}
            username={user.username}
            ranking={user.ranking}
            character={user.character}
            position={index + 2}
          />
        ))}
      </div>
    );
  }
}

World.defaultProps = {
  users: [],
  onMount: () => console.warn("default: World.onMount")
};

export default Connect(World);
