import React, { PureComponent } from "react";
import Style from "./Info.scss";
import ProfileInfo from "./../../components/ProfileInfo/ProfileInfo";

export default class Info extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <ProfileInfo label="Nom" value="Marques" />
        <ProfileInfo label="Prénom" value="Kevin" />
        <ProfileInfo label="Pseudo" value="MarquesK" />
        <ProfileInfo label="Personnage préféré" value="Sophitia" />
        <ProfileInfo label="Email" value="marques@live.fr" />
      </div>
    );
  }
}

Info.propTypes = {};
Info.defaultProps = { style: {} };
