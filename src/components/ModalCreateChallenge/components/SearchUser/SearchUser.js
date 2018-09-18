import React, { PureComponent } from "react";
import Style from "./SearchUser.scss";
import Header from "./../../../Header/Header";
import Footer from "./../Footer/Footer";
import Input from "./../Input/Input";
import Thumb from "./../../../Thumb/Thumb";

const User = ({ ranking, character, username }) => (
  <div className={Style.user}>
    <Thumb character={character} />
    <div className={Style.userInfo}>
      <div className={Style.username}>{username}</div>
      <div className={Style.userRank}>{ranking}</div>
    </div>
  </div>
);

export default class SearchUser extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <Header title="Qui voulez-vous défier ?" noBoxShadow />
        <Input placeholder="Rechercher" />
        <div className={Style.usersWrapper}>
          <User character="kilik" username="Kayane" ranking="2564" />
          <User character="kilik" username="Kayane" ranking="2564" />
          <User character="kilik" username="Kayane" ranking="2564" />
          <User character="kilik" username="Kayane" ranking="2564" />
        </div>
        <Footer />
      </div>
    );
  }
}

SearchUser.propTypes = {};
