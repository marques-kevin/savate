import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Style from "./NeedLogin.scss";
import Header from "./../../components/Header/Header";
import Fixed from "./../Fixed/Fixed";
import Info from "@material-ui/icons/InfoOutlined";
import MainButton from "./../MainButton/MainButton";
import Padding from "./../Padding/Padding";
import Connect from "./containers/NeedLogin.container";
import FullPageLoader from "./../FullPageLoader/FullPageLoader";

class NeedLogin extends PureComponent {
  state = {};

  render() {
    return (
      <div className={Style.container}>
        <Fixed top onHeight={height => this.setState({ height })}>
          <Header title={this.props.title} />
        </Fixed>
        <Padding height={this.state.height} />
        <div className={Style.icon}>
          <Info style={{ fontSize: 40 }} />
        </div>
        <div className={Style.message}>
          Vous devez être connecté pour accéder à cette page !
        </div>
        <div className={Style.button}>
          <MainButton onClick={this.props.onClickButton} text="Se connecter" />
        </div>
        <FullPageLoader loading={this.props.fetching} />
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
