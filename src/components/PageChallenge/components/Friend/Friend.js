import React, { PureComponent } from "react";
import Style from "./Friend.scss";
import Close from "@material-ui/icons/Close";
import UserItem from "./../../../UserItem/UserItem";

export default class Friend extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <UserItem ranking={2102} username="Kayane" character={"Kilik"} />
        <div className={Style.arrow}>
          <Close />
        </div>
      </div>
    );
  }
}

Friend.propTypes = {};
Friend.defaultProps = { style: {} };
