import React, { PureComponent } from "react";
import Style from "./UserItem.scss";
import User from "./../../../UserItem/UserItem";

class UserItem extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <div className={Style.rank}>{this.props.position}</div>
        <User
          onClick={this.props.onClick}
          picture={this.props.picture}
          username={this.props.username}
          ranking={this.props.ranking}
        />
      </div>
    );
  }
}

UserItem.defaultProps = {};

export default UserItem;
