import React, { PureComponent } from "react";
import Style from "./Signin.scss";
import Button from "./../../../MainButton/MainButton";

export default class Signin extends PureComponent {
  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this;
    this.props.onSubmit({ email, password });
  };

  render() {
    return (
      <div className={Style.content}>
        <div className={Style.message}>
          Vous devez être connecté pour accéder à cette page !
        </div>
        <form id="form" noValidate onSubmit={this.onSubmit}>
          <Button
            text="Google Signin"
            style={{ marginTop: "50px" }}
            type="submit"
            htmlFor="form"
          />
        </form>
      </div>
    );
  }
}

Signin.propTypes = {};
