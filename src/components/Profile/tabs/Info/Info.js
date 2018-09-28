import React, { PureComponent } from "react";
import Style from "./Info.scss";
import ProfileInfo from "./../../components/ProfileInfo/ProfileInfo";
import Connect from "./containers/Info.container";

class Info extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <ProfileInfo
          label="Nom"
          value={this.props.lastName}
          type="text"
          title="Modifier votre nom de famille"
          onUpdate={value => this.props.onUpdate("lastName", value)}
        />
        <ProfileInfo
          label="Prénom"
          value={this.props.firstName}
          type="text"
          title="Modifier votre prénom"
          onUpdate={value => this.props.onUpdate("firstName", value)}
        />
        <ProfileInfo
          label="Personnage préféré"
          value={this.props.character}
          type="character"
          text="En changeant de personnage, votre image de profil va également être modifié."
          title="Modifier votre personnage préféré"
          onUpdate={value => this.props.onUpdate("character", value)}
        />
        <ProfileInfo
          label="Pseudo"
          value={this.props.username}
          type="text"
          title="Modifier votre pseudo"
          readOnly
          onUpdate={value => this.props.onUpdate("username", value)}
        />
        <ProfileInfo
          label="Email"
          value={this.props.email}
          type="email"
          readOnly
        />
        <div className={Style.logout} onClick={this.props.onLogout}>
          Se déconnecter
        </div>
      </div>
    );
  }
}

Info.propTypes = {};
Info.defaultProps = {};

export default Connect(Info);
export const Component = Info;
