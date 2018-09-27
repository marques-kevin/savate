import React, { PureComponent } from "react";
import Style from "./Login.scss";
import PropTypes from "prop-types";
import Connect from "./containers/Login.container";
import FullPageLoader from "./../FullPageLoader/FullPageLoader";
import Footer from "./components/Footer/Footer";
import Signin from "./components/Signin/Signin";
import Forgot from "./components/Forgot/Forgot";
import Register from "./components/Register/Register";
// import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

class Login extends PureComponent {
  lockBody() {
    // disableBodyScroll(this.element);
  }

  unlockBody() {
    // clearAllBodyScrollLocks();
  }

  // componentWillReceiveProps(props) {
  //   if (this.props.isOpen === props.isOpen) return false;
  //   if (props.isOpen) this.lockBody();
  //   if (!props.isOpen) this.unlockBody();
  // }
  render() {
    return (
      <div className={Style.container} ref={ref => (this.element = ref)}>
        <div className={Style.content}>
          {this.props.page === "register" && (
            <Register onSubmit={this.props.onSubmitRegister} />
          )}
          {this.props.page === "signin" && (
            <Signin
              onSubmit={this.props.onSubmitSignin}
              isFetching={this.props.isFetching}
            />
          )}
          {this.props.page === "forgot" && (
            <Forgot onSubmit={this.props.onSubmitForgot} />
          )}
        </div>

        <Footer
          onCancel={this.props.onCancel}
          onRegister={this.props.onRegisterTab}
          onSignin={this.props.onSigninTab}
          page={this.props.page}
        />
        <FullPageLoader loading={this.props.fetching} />
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
  page: PropTypes.oneOf(["signin", "register", "forgot"]),
  isFetching: PropTypes.bool,
  isOpen: PropTypes.bool
};

Login.defaultProps = {
  onCancel: () => console.warn("default: onCancel"),
  onRegisterTab: () => console.warn("default: onRegisterTab"),
  onSigninTab: () => console.warn("default: onSigninTab"),
  onSubmitRegister: () => console.warn("default: onSubmitRegister"),
  onSubmitSignin: () => console.warn("default: onSubmitSignin"),
  page: "signin",
  isFetching: false,
  isOpen: false
};

export default Connect(Login);
export const Component = Login;
