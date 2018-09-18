import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Public from "@material-ui/icons/Public";
import Notifications from "@material-ui/icons/Notifications";
import Whatshot from "@material-ui/icons/Whatshot";
import Person from "@material-ui/icons/Person";
import ImportContacts from "@material-ui/icons/ImportContacts";
import { Container, Name } from "./Icon.style";

const DisplayIcon = name => {
  if (name === "classement") return <Public />;
  if (name === "notifications") return <Notifications />;
  if (name === "defi") return <Whatshot />;
  if (name === "profil") return <Person />;
  if (name === "framedata") return <ImportContacts />;
};

export default class Icon extends PureComponent {
  render() {
    return (
      <Container active={this.props.active} onClick={this.props.onClick}>
        {DisplayIcon(this.props.name.toLowerCase())}
        <Name>{this.props.name}</Name>
      </Container>
    );
  }
}

Icon.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func
};

Icon.defaultProps = {
  name: "!"
}
