import React, { PureComponent } from "react";
import Style from "./Login.scss";
import Footer from "./components/Footer/Footer";
// import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";

export default class Login extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        {/* <Signin /> */}
        <Register />
        <Footer onPrev />
      </div>
    );
  }
}

Login.propTypes = {};
