import React, { Component } from "react";
import Header from "./../../components/Header/Header";
import SkinUser from "./../../components/SkinUser/SkinUser";
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
      </div>
    );
  }
}

export default Profile;
