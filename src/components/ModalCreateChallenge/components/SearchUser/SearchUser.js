import React, { PureComponent } from "react";
import Style from "./SearchUser.scss";
import Header from "./../../../Header/Header";
import Footer from "./../Footer/Footer";
import Input from "./../Input/Input";
import Thumb from "./../../../Thumb/Thumb";
import Connect from "./containers/SearchUser.container";

const User = ({ ranking, character, username, onClick }) => (
  <div className={Style.user} onClick={onClick}>
    <Thumb character={character} />
    <div className={Style.userInfo}>
      <div className={Style.username}>{username}</div>
      <div className={Style.userRank}>{ranking}</div>
    </div>
  </div>
);

class SearchUser extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <Header title="Qui voulez-vous défier ?" noBoxShadow />
        <Input
          onChange={this.props.onSearchUser}
          label={"Rechercher un joueur"}
          value={this.props.input}
        />
        <div className={Style.usersWrapper}>
          {this.props.users.map(user => (
            <User
              character={user.character}
              username={user.username}
              ranking={user.ranking}
              onClick={() => this.props.onSelect(user)}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

SearchUser.propTypes = {};
SearchUser.defaultProps = {
  users: [],
  onSearchUser: () => console.warn("default: SearchUser.onSearchUser"),
  onSelect: () => console.warn("default: SearchUser.onSelect")
};

export default Connect(SearchUser);
export const Component = SearchUser;
