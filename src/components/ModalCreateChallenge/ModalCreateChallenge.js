import React, { PureComponent } from "react";
import Style from "./ModalCreateChallenge.scss";
import SearchUser from "./components/SearchUser/SearchUser";

export default class ModalCreateChallenge extends PureComponent {
  render() {
    return this.props.isOpen ? (
      <div className={Style.container}>
        <SearchUser />
      </div>
    ) : null;
  }
}

ModalCreateChallenge.propTypes = {};
