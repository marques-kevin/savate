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
          picture={first.picture}
          onClick={() => this.props.onClickUser(first.id)}
        />
        {all.map((user, index) => (
          <UserItem
            key={user.id}
            username={user.username}
            ranking={user.ranking}
            picture={user.picture}
            position={index + 2}
            onClick={() => this.props.onClickUser(user.id)}
          />
        ))}
      </div>
    );
  }
}

World.defaultProps = {
  users: [],
  onMount: () => console.warn("default: World.onMount"),
  onClickUser: () => console.warn("default: World.onClickUser")
};

export default Connect(World);
