import React, { Component } from "react";
import Header from "./../../components/Header/Header";
import SkinUser from "./../../components/SkinUser/SkinUser";
import ProfileInfo from "./../../components/ProfileInfo/ProfileInfo";
import Tabs from "./../../components/Tabs/Tabs";
// import { Database } from "./../../utils/firebase";

class Profile extends Component {
  render() {
    return (
      <div>
        <Header title="Profil" noBoxShadow />
        <SkinUser />
        <div style={{ marginTop: "30px" }}>
          <Tabs />
        </div>
        <div>
          <ProfileInfo label="Nom" value="Marques"/>
          <ProfileInfo label="Prénom" value="Kevin"/>
          <ProfileInfo label="Pseudo" value="MarquesK"/>
          <ProfileInfo label="Personnage préféré" value="Sophitia"/>
          <ProfileInfo label="Email" value="marques@live.fr"/>
        </div>
      </div>
    );
  }
}

export default Profile;
