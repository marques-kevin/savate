import React, { PureComponent } from "react";
import Style from "./Login.scss";
import PropTypes from "prop-types";
import Connect from "./containers/Login.container";
import Footer from "./components/Footer/Footer";
import Signin from "./components/Signin/Signin";
import Forgot from "./components/Forgot/Forgot";
import Register from "./components/Register/Register";

class Login extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        {this.props.page === "register" && (
          <Register onSubmit={this.props.onSubmitRegister} />
        )}
        {this.props.page === "signin" && (
          <Signin onSubmit={this.props.onSubmitSignin} />
        )}
        {this.props.page === "forgot" && (
          <Forgot onSubmit={this.props.onSubmitForgot} />
        )}
        <Footer
          onCancel={this.props.onCancel}
          onRegister={this.props.onRegisterTab}
          onSignin={this.props.onSigninTab}
          page={this.props.page}
        />
      </div>
    );
  }
}

Login.propTypes = {
  onCancel: PropTypes.func,
  onRegisterTab: PropTypes.func,
  onSigninTab: PropTypes.func,
  onSubmitRegister: PropTypes.func,
  onSubmitSignin: PropTypes.func,
  page: PropTypes.oneOf(["signin", "register"])
};

Login.defaultProps = {
  onCancel: () => console.warn("default: onCancel"),
  onRegisterTab: () => console.warn("default: onRegisterTab"),
  onSigninTab: () => console.warn("default: onSigninTab"),
  onSubmitRegister: () => console.warn("default: onSubmitRegister"),
  onSubmitSignin: () => console.warn("default: onSubmitSignin"),
  page: "signin"
};

export default Connect(Login);
export const Component = Login;
