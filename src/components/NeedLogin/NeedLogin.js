import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Style from "./NeedLogin.scss";
import Header from "./../../components/Header/Header";
import Fixed from "./../Fixed/Fixed";
import Padding from "./../Padding/Padding";
import Connect from "./containers/NeedLogin.container";

class NeedLogin extends PureComponent {
  state = {};

  render() {
    return (
      <div className={Style.container}>
        <Fixed top onHeight={height => this.setState({ height })}>
          <Header title={this.props.title} noBoxShadow />
        </Fixed>
        <Padding height={this.state.height} />
        <div className={Style.icon}>Oups !</div>
        <div className={Style.message}>Hello</div>
        <div className={Style.button} onClick={this.props.onClickButton}>
          zada
        </div>
      </div>
    );
  }
}

NeedLogin.propTypes = {
  tab: PropTypes.string
};

NeedLogin.defaultProps = {
  tab: "resume"
};

export default Connect(NeedLogin);
